const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗'); // Heeeeeemo
    console.log('')
    console.log(' ╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log(' ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
    client.user.setActivity("#js || #html",{type: 'PLAYING'}); //Heeeeeemo Heeeeeeeeeemo 
});


                        client.on('message', message => {

                                    var prefix = "$";

                            if (message.author.bot) return;

                            if (!message.content.startsWith(prefix)) return;

                        

                            let command = message.content.split(" ")[0];

                            command = command.slice(prefix.length);

                        

                            let args = message.content.split(" ").slice(1);

                        

                            if (command == "embed") {

                                if (!message.channel.guild) return message.reply('** This command only for servers **');

                                let say = new Discord.RichEmbed()

                                    .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)

                                    .setDescription(args.join("  "))

                                    .setColor("RANDOM")

                                message.channel.sendEmbed(say);

                                message.delete();

                            }

                        });

                           
client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('$mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** Write Server IP . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 Server NIP",`${args}`,true)
        .addField("🌐 Server Port",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`McStats`)
                .setTimestamp()
    message.channel.send(embed)      
}})

client.on('message', message => {
    var prefix = "$" // Codes Server
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});

var prefix = "-"

exports.run = (client, message, args) => { // We're going to have to require the exports again, just like we did with the ping.
 
  // First, we need to grab the user, if they are doing it for themselves or mentioning someone.
  let user = message.mentions.users.first() || message.author; // This checks if there is a mention, and takes the first one. Although, if there isn't a mention it uses the message author as a fallback.
 
  // Next, we need to verify that the specified user is listening to spotify.
  if (user.presence.activity !== null && user.presence.activity.type === 'LISTENING' && user.presence.activity.name === 'Spotify' && user.presence.activity.assets !== null) { // This checks all of these if statements, and if they are all true, it runs the following.
   
    // Variables - These are the variables we will be using in the embed
    let trackIMG = `https://i.scdn.co/image/${user.presence.activity.assets.largeImage.slice(8)}`; // This fetches a url image using the largeImage asset after slicing off the first 8 characters.
    let trackURL = `https://open.spotify.com/track/${user.presence.activity.syncID}`; // This grabs the syncID and adds it to the end of a spotify URL.
    let trackName = user.presence.activity.details;
    let trackAuthor = user.presence.activity.state;
    let trackAlbum = user.presence.activity.assets.largeText; // These all hold the info for the song, grabbed from the user's presence.
   
    // Create embed object
    const embed = new Discord.MessageEmbed() // This will create the start of the embed, we will now add to it.
      .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png') // This url will be in the description, it is setting the author & icon field for the embed.
      .setColor(0x1ED760) // This sets the color of the embed
      .setThumbnail(trackIMG) // This sets the thumbnail of the embed, using the variable from before.
      .addField('Song Name', trackName, true) // These are fields, and can be added easily, the true signifies that they can be on the same line.
      .addField('Album', trackAlbum, true)
      .addField('Author', trackAuthor, false) // This signifies only two can be on the line above, the third will be on a new line
      .addField('Listen to Track:', `[\`${trackURL}\`](trackURL)`, false); // This here sets a clickable link, to the trackURL, while still showing the URL in ``.
   
    // Sending Embed
    message.channel.send(embed); // This sends the formed embed to the channel.
   
    // Now, we can test it.
   
  } else { // Although, if one of those conditions is false it will run this.
   
    message.channel.send('\`This user isn\'t listening to Spotify!\` '); // This will notify in chat that the specified user isn't listening to Spotify.
   
  }
 
 
};





client.login(process.env.BOT_TOKEN);
