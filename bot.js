const Discord = require('discord.js');
const client = new Discord.Client();




client.login("NTA3OTAwNDIwODg3MTUwNTky.DzRkcw.NxclSI_zcUfPZd1TmI6EXwvvuSw");




client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("online");
});






const devs = ["372789415216414730"];
const adminprefix = ["!"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith('(prefix))ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('(prefix)wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('mils')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('(prefix)st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('(prefix)setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('(prefix)setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
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
message.author.send(`**
وعليكم السلام ورحمة الله وبركاته
**`)
      message.channel.send("منوور <3")
  }
});


client.on('guildMemberAdd', member => {
    const guild = member.guild;
    guild.channels.find(channel => channel.name === "未来welcome未来").send("اهلا وسهلا بك في سيرفرنا منور "+member.user.username);
});

client.on('guildMemberAdd', member => {
console.log('User ' + member.user.username + 'Has Joined')
var role = member.guild.roles.find('name', 'User');
member.addRole(Member)
});
