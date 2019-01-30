const Discord = require('discord.js');
const client = new Discord.Client();




client.login("NTA3OTAwNDIwODg3MTUwNTky.DzNKVQ.9zEoU6lUoBP72tOmt9h_JWRPab0");




client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
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

client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
 
      var Canvas = require('canvas')
      var jimp = require('jimp')
 
      const w = ['./w1.png'];
 
      let Image = Canvas.Image,
         canvas = new Canvas(400, 200),
         ctx = canvas.getContext('2d');
     fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
         if (err) return console.log(err);
         let BG = Canvas.Image;
         let ground = new Image;
         ground.src = Background;
         ctx.drawImage(ground, 0, 0, 400, 200);
         
     
 
             let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
             jimp.read(url, (err, ava) => {
                 if (err) return console.log(err);
                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                     if (err) return console.log(err);
                   
                     ctx.font = "bold 12px Arial";
                     ctx.fontSize = '20px';
                     ctx.fillStyle = "#f1f1f1";
                     ctx.textAlign = "center";
                     ctx.fillText(`Welcome To ${member.guild.name}`, 300, 130);
                   
                     ctx.font = "bold 12px Arial";
                     ctx.fontSize = '20px';
                     ctx.fillStyle = "#f1f1f1";
                     ctx.textAlign = "center";
                     ctx.fillText(member.user.username, 200, 150);
 
             let Avatar = Canvas.Image;
                           let ava = new Avatar;
                           ava.src = buf;
                           ctx.beginPath();
                           ctx.arc(77, 101, 62, 0, Math.PI*2);
                           ctx.stroke();
                              ctx.clip();
                              ctx.drawImage(ava, 13, 38, 128, 126);  
                     
           
         
    welcomer.sendFile(canvas.toBuffer())
 
 
 
      })
      })
 
      }
     )}
 
    })
 
    const devs = ['408611591710310410'];
 
client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(! + 'setStreaming')) {
      if (!devs.includes(message.author.id)) return message.channel.send("<@408611591710310410> only this guy can do restart the bot so don't try again :wink:.");
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/DynastyShop');
 
    } else if(message.content.startsWith(! + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});
 
      } else if(message.content.startsWith(! + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});
 
      } else if(message.content.startsWith(! + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});
 
      } else if(message.content.startsWith(! + 'setName')) {
        client.user.setUsername(argresult);
 
      } else if(message.content.startsWith(! + 'setAvatar')) {
        client.user.setAvatar(argresult);
 
 
      } else if(message.content.startsWith(! + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: Select a situation');
        client.user.setStatus(argresult);
 
 
    }
 
  });
