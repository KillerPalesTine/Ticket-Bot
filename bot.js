const Discord = require('discord.js');
const client = new Discord.Client();




client.login("NTA3OTAwNDIwODg3MTUwNTky.DzRylw.y1BHMPQDC8f_pfI7uQw1NotZL2A");




client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("online");
client.user.setGame(`type !help`,'https://www.twitch.tv/TEST-Broadcast');
});


client.on("message", message => {
  if (message.content === "!help") {
message.author.send(`**
Soon
Soon
Soon
Soon
Soon
Soon
**`)
      message.channel.send("تفقد الخاص")
  }
});


client.on("message", message => {
  if (message.content === "السلام عليكم") {
message.channel.send(`**
وعليكم السلام ورحمة الله وبركاته
**`)
      message.channel.send("منوور :heart:")
  }
});
