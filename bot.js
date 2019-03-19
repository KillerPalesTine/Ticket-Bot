const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "%T";





//fun
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}


//console & playing !
client.on('ready', () => {
    console.log(`${client.user.tag} Is Online !`) 
 client.user.setGame(`%Thelp | ArabGames`,"http://twitch.tv/Death Shop")
});





//commands !
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    if (message.content.toLowerCase().startsWith(prefix + `help`)) {
      const embed = new Discord.RichEmbed()
      .setTitle(`:mailbox_with_mail: Help`)
      .setColor(0xCF40FA)
      .setDescription(`مرحباٌ! I'm ${client.user.username}, هذا البوت خاص للتذاكر لمساعره فريق العمل و هذه هي الاوامر:`)
      .addField(`Tickets`, `[${prefix}new]() > لفتح تذكره جديده و منشنه اعضاء دعم السرفر \n[${prefix}close]() > لغلق التذكره التي تم فتحها من قبل الدعم`)
      .addField(`Other`, `[${prefix}help]() > لرؤيه قائمه الاوامر \n[${prefix}ping]() > لمعرفه البينق الخاص للبوت \n[${prefix}about]() > لمعرفه كل شي عن البوت`)
      message.channel.send({ embed: embed });
    }
  
    if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
      message.channel.send(`Hoold on!`).then(m => {
      m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
      });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `new`)) {
      const reason = message.content.split(" ").slice(1).join(" ");
      if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`هذا السيرفر ليس لديه \`Support Team\` صنع رتبة, لذلك لن يتم فتح التذكرة.\nاذا كنت تمتلك administrator, إنشاء اسم بهذا الاسم بالضبط وإعطائه للمستخدمين الذين يمكنهم مشاهدة التذاكر.`);
      if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`انت بالفعل لديك تذكره مفتوحه.`);
      message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
          let role = message.guild.roles.find("name", "Support Team");
          let role2 = message.guild.roles.find("name", "@everyone");
          c.overwritePermissions(role, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          c.overwritePermissions(role2, {
              SEND_MESSAGES: false,
              READ_MESSAGES: false
          });
          c.overwritePermissions(message.author, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          let mrx = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`:white_check_mark: تم إنشاء تذكرتك, #${c.name}.`)
          .setTimestamp()
          message.channel.sendEmbed(mrx);
          const embed = new Discord.RichEmbed()
          .setColor(0xCF40FA)
          .addField(`مرحباً ${message.author.username}!`, `من فضلك وضح لماذا قمت بفتح التذكره مع بعض التفاصيل. مسؤلي السرفر سوف يكونوا موجودين في اسرع وقت للمساعده.`)
          .setTimestamp();
          c.send({ embed: embed });
      }).catch(console.error);
  }
  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
      if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر.`);
  
      message.channel.send(`هل أنت متاكد؟ بمجرد تأكيد, لا يمكنك عكس هذا العمل!!\nللتأكيد ، اكتب \`-confirm\`. سوف ينتهي المهلة خلال 10 ثوانٍ ويتم إلغاؤها.`)
      .then((m) => {
        message.channel.awaitMessages(response => response.content === '-confirm', {
          max: 1,
          time: 10000,
          errors: ['time'],
        })
        .then((collected) => {
            message.channel.delete();
          })
          .catch(() => {
            m.edit('انتهى إغلاق التذاكر ، لم يتم إغلاق التذكرة.').then(m2 => {
                m2.delete();
            }, 3000);
          });
      });
  }
  
  });
  
  client.on('message', message => {
      if (message.content.startsWith(prefix + 'about')) {
      if (message.author.bot) return
      if (!message.guild) return message.reply('**:x: This Command Only In Server**')
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(':mailbox_with_mail: about')
      .setDescription(`I am ${client.user.username}, and I will try my best to help everyone! If I am in a discord server, people can use me to create tickets in order`)
      .setFooter(`${client.user.username}`)
      message.author.sendEmbed(embed)
      }
  });


client.on("message", msg => {//Alpha Codes 
    var Alpha = '%';//البرفكس
    if(msg.content.startsWith(Alpha + "inv")){//Alpha Codes 
        let e = new Discord.RichEmbed()//Alpha Codes 
        .setTitle("**اضافه البوت لسيرفرك**")//Alpha Codes 
       .setDescription(`**📬 | اذا تريد البوت يرسلك الرابط بخاصك
       📇 | اذا تريد البوت يرسلك الرابط هنا بالشات**`)
        msg.channel.send(e).then(b => {
            b.react('📇')
            .then(() => b.react('📬'))
            .then(() =>b.react('📇'))
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === msg.author.id;

let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
msg.reply(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
b.delete(2000)
})
reaction2.on("collect", r => {
    msg.author.send(`${msg.author} https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    b.delete(2000)
    msg.reply("**تم ارسال الرابط في خاصك 📬**").then(d => {
        d.delete(2000)
    })
    })
        })
    }
});


const devs = ["518816831734022154"]// ايدي الخاص بحسابك
 
const adminprefix = "T&";//Narox
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//لتغير البريفكس
  client.user.setPrefix(argresult).then
      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
 
  });

  
  
  
  









///TOKEN
client.login(process.env.BOT_TOKEN);
