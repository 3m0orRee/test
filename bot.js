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


client.login(process.env.BOT_TOKEN);
