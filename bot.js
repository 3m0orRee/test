const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Supreme Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Supreme Codes' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟.`,"http://twitch.tv/S-F")
client.user.setStatus("Do Not Distrurb")
 
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

                                    .setColor(0x23b2d6)

                                message.channel.sendEmbed(say);

                                message.delete();

                            }

                        });





client.login(process.env.BOT_TOKEN);
