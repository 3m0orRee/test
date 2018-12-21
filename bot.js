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
                                    .addField(`${message.author.discriminator}`)
                                    .setDescription(args.join("  "))
                                    .setColor(0x23b2d6)
                                message.channel.sendEmbed(say);
                                message.delete();
                            }
                        });




client.login(process.env.BOT_TOKEN);
