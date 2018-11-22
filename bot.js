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


client.login(process.env.BOT_TOKEN);
