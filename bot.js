const Discord = require('discord.js');
const client = new Discord.Client();




client.login("NTA3OTAwNDIwODg3MTUwNTky.DzV9BA.j_YE69pDVAfTgK0luODgYGD12K4");




client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("online");
client.user.setGame(`type *help`,'https://www.twitch.tv/TEST-Broadcast');
client.user.setGame(`*invite اضافة البوت`,'https://www.twitch.tv/TEST-Broadcast');
});


client.on("message", message => {
  if (message.content === "*help") {
message.author.send(`**
Soon
&bc لارسال رسالة ب الخاص ل الاعضاء
Soon
Soon
Soon
Soon
**`)
      message.channel.send("تفقد الخاص")
  }
});

client.on("message", message => {
  if (message.content === "*invite") {
message.author.send(`**
https://discordapp.com/api/oauth2/authorize?client_id=507900420887150592&permissions=8&scope=bot
**`)
    message.channel.send("تم الارسال في الخاص")
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


client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });
