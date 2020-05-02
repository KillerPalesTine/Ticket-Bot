.const Discord = require("discord.js");
.const client = new Discord.Client();
.const prefix = "-";





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
 client.user.setGame(`-help | Dream`,"http://twitch.tv/Death Shop")
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
    var Alpha = '-';//البرفكس
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
 
const adminprefix = "-";//Narox
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


client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`❌ البوت خرج من سيرفر`)
        .setDescription(`**
→ | اسم السيرفر : \`${guild.name}\`
→ | ايدي السيرفر: \`${guild.id}\`
→ | صاحب السيرفر : ${guild.owner}
→ | عدد الاعضاء: \`${guild.memberCount}\`
→ | عدد السيرفرات الحاليه : \`${client.guilds.size}\`**`)
        .setColor('RANDOM')
client.guilds.get('549250692536074241').channels.get('557899870187421706').send(embed)
}); 

client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`البوت دخل سيرفر ✅ `)
        .setDescription(`**
→ | اسم السيرفر : \`${guild.name}\`
→ | ايدي السيرفر: \`${guild.id}\`
→ | صاحب السيرفر : ${guild.owner}
→ | عدد الاعضاء: \`${guild.memberCount}\`
→ | عدد السيرفرات الحاليه : \`${client.guilds.size}\`**`)
        .setColor('RANDOM')
client.guilds.get('549250692536074241').channels.get('557899853104021504').send(embed)
});


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-msgall')){ // هو البريفكس و يمكنك تغييره في أي وقت +
 if(!message.author.id === '518816831734022154') return; // حط الايدي حقك عشان تكون الوحيد الي يقدر يستخدم الأمر
message.channel.sendMessage(' جار ارسال الرسالة | ✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`ولكم نورت السيرفر
 ${member}  
 `) 
}).catch(console.error)
})


const moment = require('moment');

client.on('message', message =>{
   if(message.content.startsWith(prefix + "user")) {
    const membre = message.mentions.members.first() || message.member;
       let embed1 = new Discord.RichEmbed()
       .setAuthor(message.guild.name,message.guild.iconURL)
       .setTitle(`${membre.user.username} :`)
       .setThumbnail(membre.user.avatarURL)
       .addField("`Joined Discord At :`",`__${moment.utc(membre.user.createdAt).format("LL")}__`,true)
        .addField("`Joined Server At :`",`__${moment.utc(membre.joinedAt).format('LL')}__`,true)
        .setFooter(membre.user.id,"https://images-ext-1.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
    
       message.channel.sendEmbed(embed1);
   }
});

 /*
لازم تسوي ملف اسمه warns.json 
معلومة لو الشخص تعدي ال 3 وارنات بيصيرله بان
الاوامر
لاعطاء وارن لشخص warn @user
لمسح وارنات شخص delwarns @user
*/



let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

client.on("message", function(message) {
  let user = message.mentions.users.first();
  if (!message.channel.guild) return;
  

  let args = message.content.split(" ");
let command = args[0]
if(command === prefix + "warn"){
  if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
   if(warns[message.guild.id] == undefined) {
      warns[message.guild.id] = {
  bannedusers: "none"
      }
      fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
        if (err) throw err;
      });
    }
    if(warns[message.guild.id][user.id] == undefined) {
      warns[message.guild.id][user.id] = {
  warn: "none",
  warn2: "none",
  warn3: "none",
  warn4: "none"
      }
      fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
        if (err) throw err;
      });
    }
    let warn1 = warns[message.guild.id][user.id].warn;
let warn2 = warns[message.guild.id][user.id].warn2;
let warn3 = warns[message.guild.id][user.id].warn3;
let warn4 = warns[message.guild.id][user.id].warn4;
  let member = warns[message.guild.id][user.id];
   if(!user)return message.channel.send("Mention Someone")
  if(user.id === message.author.id)return message.channel.send("You Cant Warn Yourself")
 if (warn1 === "none"){
   if(warn1 === "warned")return;
warns[message.guild.id][user.id].warn = "warned"
    message.channel.send("Done That User Has Got The `1` Warn")
  }else if(warn2 === "none"){
if(warn1 === "none")return;
if(warn2 === "warned")return;
warns[message.guild.id][user.id].warn2 = "warned"
fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
  if (err) throw err;
});
    message.channel.send("Done That User Has Got The `2` Warn")
  }else if(warn3 === "none"){
    if(warn1 === "none")return;
    if(warn2 === "none")return;
    if(warn3 === "warned")return;
    warns[message.guild.id][user.id].warn3 = "warned"
    fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
      if (err) throw err;
    });
        message.channel.send("Done That User Has Got The `3` Warn Any Warn After That One Will Get That User Banned")
  }else if(warn4 === "none"){
    if(warn1 === "none")return;
    if(warn2 === "none")return;
    if(warn3 === "none")return;
      warns[message.guild.id][user.id] = {
    warn: "none",
    warn2: "none",
    warn3: "none",
    warn4: "none"
        }
        fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
          if (err) throw err;
        });
      message.guild.member(user).mute("Reached The Limit Of Warns", user);
      message.channel.send("**User Has Muted Reason `Reached Limit Of Warns`**")
  }

}else if(command === `${prefix}delwarns`){
if(!user)return message.channel.send("**Sorry Missing User/Mention**")
  warns[message.guild.id][user.id] = {
    warn: "none",
    warn2: "none",
    warn3: "none",
    warn4: "none"
        }
        fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
          if (err) throw err;
        });
        message.channel.send("Done Deleted All Warns For This User")
}

}); 

const sug = JSON.parse(fs.readFileSync('./sug.json' , 'utf8'));
 
client.on('message', message => {
          if (!message.channel.guild) return;
  //wait wait do not do anything let me kk
   
   if(message.content.startsWith(prefix + "setsug")) {
     
     let args = message.content.split(" ").slice(1)
       if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
       if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':information_source: | **لا تملك الصلاحيات الكافيه**' );
           let room = args[0]
if(!room) return message.reply('**اكتب اسم الروم**')
     if(!message.guild.channels.find('name', args[0])) return message.reply('**لا يمكنني اجاد الروم**')
let embed = new Discord.RichEmbed()
.setTitle('**Done The Suggest Code Has Been Setup**')
.addField('Channel:', room)
.addField('Requested By:', `${message.author}`)
.addField('Time now: ', `${moment(message.createdAt).format('D/MM/YYYY h:mm')}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
sug[message.guild.id] = {
channel: room,
}
fs.writeFile("./sug.json", JSON.stringify(sug), (err) => {
if (err) console.error(err)
})
  client.on('message', message => {
 
 
   
     })
   }else{
     if(message.content.startsWith(prefix+`suggest`)) {
       
     if(message.channel.type == "dm") return message.reply('**This Command Only For Servers**');
     let suggest = message.content.split(" ").slice(1).join(' ');
     if(!suggest) return message.reply(`**اكتب اقتراحك**`)
   let findchannel = (message.guild.channels.find('name', `${sug[message.guild.id].channel}`))
   if(!findchannel) return message.channel.send(`**انا لم اجد الروم**`)
   message.channel.send(`**تم ارسال اقتراحك**`)
   let sugembed = new Discord.RichEmbed()
   .setTitle('New Suggest !')
   .addField('Suggest By:', `${message.author}`)
   .addField('Suggest:', `${suggest}`)
   .setFooter(client.user.username)
   findchannel.sendEmbed(sugembed)
       .then(function (message) {
         message.react('✅')
         message.react('❌')
       })
       .catch(err => {
           message.reply(`**انا لا اجد الروم**`)
           console.error(err);
       });
}
   }
}
          )

client.on("message", msg => {
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);  
if(cmd === `${prefix}dm`){
  let mentions = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!mentions) return msg.reply("**منشن العضو**").then(men => {
      men.delete(2222)
      msg.delete()
  })
  let args2 = args.join(" ").slice(22);
  if(!args2) return msg.reply("**اكتب الرسالة**").then(am => {
      am.delete(2222)
      msg.delete()
  })
let emb = new Discord.RichEmbed()
.setTitle("**DM**")
.addField("**الرسالة**", args2)
.addField("**الرسالة لـ**", mentions)
.addField("**من قبل**", msg.author)
.setDescription(`**هل انت متاْكد برسالتك؟
✔ | نعم

❌ | لا**`)
msg.channel.send(emb).then(od => {
  od.react("✔")
  .then(()=> od.react("✔"))
  .then(()=> od.react("❌"))
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
reaction2.on("collect", r => {
msg.reply("**تم الغاء رسل رسالتك بنجاح**").then(cn => {
cn.delete(2222)
msg.delete()
})
od.delete(2222)
})
reaction1.on("collect", r => {
let embd = new Discord.RichEmbed()
.setTitle("**DM**")
.setDescription(`** الرسالة نوع وش؟ :arrow_down:
🚩 | امبد

✨ | بدون امبد
**`)
msg.delete()
od.delete(2222)
msg.channel.send(embd).then(bo => {
bo.react("🚩")
.then(() => bo.react("🚩"))
.then(() => bo.react("✨"))
let r1 = (reaction, user) => reaction.emoji.name === '🚩' && user.id === msg.author.id;
let r2 = (reaction, user) => reaction.emoji.name === '✨' && user.id === msg.author.id;

let rec1 = bo.createReactionCollector(r1, { time: 12000 });
let rec2 = bo.createReactionCollector(r2, { time: 12000 });
rec1.on("collect", r => {
let embde = new Discord.RichEmbed()
.setTitle("**رسالة**")
.addField("**الرسالة**", args2)
.addField("**من قبل**", msg.author)
bo.delete(2222)
msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(op => {
  op.delete(2222)
  msg.delete()
})
mentions.send(embde)
})
rec2.on("collect", r => {
  mentions.send(args2)
  msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(ede => {
      ede.delete(2222)
      bo.delete(2222)
      msg.delete()
     
  })
  })

})

}) 
})
}
})

client.on("message", async message => { //OMAR#6356
  if(message.content.startsWith(prefix + "bc")) { //OMAR#6356
    const args = message.content.split(" ").slice(1).join(" "); //OMAR#6356
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('لا تمتلك الصلاحيات الكافية');
    if(!args) return message.channel.send('يجب عليك  الرسالة'); //OMAR#6356
 //OMAR#6356
      let help = new Discord.RichEmbed() //OMAR#6356
          .setColor("RANDOM") //OMAR#6356
          .setThumbnail(message.author.avatarURL) //OMAR#6356
          .setDescription(`**انوع البرودكاست

          1- للكل بدون امبيد
          2- للكل بامبيد
          3- اونلاين بدون امبيد
          4- للالغاء
          **`);
         let typesMSG = await  message.channel.sendEmbed(help)
         var numbers = ["u0030u20E3", "u0031u20E3", "u0032u20E3", "u0033u20E3", "u0034u20E3", "u0035u20E3", "u0036u20E3", "u0037u20E3", "u0038u20E3", "u0039u20E3"]


       let r1 = await typesMSG.react(numbers[1]); //OMAR#6356
       let r2 = await typesMSG.react(numbers[2]); //OMAR#6356
       let r3 = await typesMSG.react(numbers[3]); //OMAR#6356
       let r4 = await typesMSG.react("❌"); //OMAR#6356




 let filter1 = (reaction, user) => reaction.emoji.name == numbers[1] && user.id == message.author.id;
 let filter2 = (reaction, user) => reaction.emoji.name == numbers[2] && user.id == message.author.id;
 let filter3 = (reaction, user) => reaction.emoji.name == numbers[3] && user.id == message.author.id;
 let filter4 = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;
 if (!typesMSG) return;

 let f1 = typesMSG.createReactionCollector(filter1, { //OMAR#6356
     time: 18000 //OMAR#6356
 });
 let f2 = typesMSG.createReactionCollector(filter2, { //OMAR#6356
     time: 18000
 }); //OMAR#6356
 let f3 = typesMSG.createReactionCollector(filter3, { //OMAR#6356
     time: 18000
 });
 let f4 = typesMSG.createReactionCollector(filter4, { //OMAR#6356
     time: 18000
 });


  

f1.on('collect', async r => { //OMAR#6356
  await typesMSG.delete();
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
    m.send(`${args}n ${m}`);
    })
    message.channel.send(`تم الارسال`); 
  
}); //OMAR#6356

f2.on('collect', async r => {
await typesMSG.delete();
message.guild.members.forEach(m => {
  var bc = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .addField('# | الراسل', message.author) //OMAR#6356
  .addField('# | الرسالة ', args)
  .addField('# | السيرفر', message.guild.name) //OMAR#6356
  .setColor('RANDOM')
  m.sendMessage(bc)
});
message.channel.send(`تم الارسال`)
}); //OMAR#6356

f3.on('collect', async r => {
await typesMSG.delete();
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
  m.send(`${args}n ${m}`); //OMAR#6356
  })
  message.channel.send(``${message.guild.members.filter(m => m.presence.status !== 'online').size}` : عدد الاعضاء المستلمين`); 
});
 //OMAR#6356
f4.on('collect', async r => {
await typesMSG.delete();
message.channel.send('تم الالغاء بنجاح') //OMAR#6356
}); //OMAR#6356


  } //OMAR#6356

}); //OMAR#6356

Client.on('message', message => {
    if (message.content.startsWith("رابط")) { // هذا الامر تقدر تغييره وتخليه على حسب مزاجك 

  message.channel.createInvite({
        thing: true,
        maxUses: 100, // هنا عدد الناس اللي يقدرو يدخلو بالرابط حقك
        maxAge: 86400 // هنا مدة صلاحية الرابط - لا تغييرها -
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ") // الرسالة التي ستظهر للعضو عند طلبه رابط
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});



/// جميع الحقوق محفوظة لــ الفا كودز ///

client.on('message', message => {
  if (message.author.bot) return;

  let args = message.content.split(" ");
  
  let command = args[0];
  
  let messagecount = args[1];
  
    if(command == prefix + "clear") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
		message.channel.send("يجب ان تمتلك خاصية `MANAGE_MESSAGES` ")
	} else if (!messagecount) {
		message.channel.send("**قم بإدراج عدد الرسائل المراد حذفها**")
	}else {
		message.channel.bulkDelete(messagecount);
        message.channel.send("**رسالة `" + messagecount + "` لقد تم حذف**").then(mes => 
		mes.delete(3000)
		);    
	 }
   }
  // By Alpha Codes - AboKhalil 26/7/2019
});

client.on('message', message => {   
     if (message.content === "ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("RANDOM")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 

  message.channel.sendEmbed(embed);
    }
});

  
  
  
  






///TOKEN
client.login(process.env.BOT_TOKEN);
