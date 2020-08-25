const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");


client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("734227709445799989");
  let channel = await client.channels.cache.get("734230751251399391");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui pela saco.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(` Boas-vindas `)
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**!`)
      .addField(`Atualmente estamos com:`, `**${member.guild.memberCount} Membros**`)
      .addField('<a:baiacu:746144169516335126>|Divirta-se!| <a:baiacu:746144169516335126>',`<:Hyped:746146987585568798>`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();

    channel.send(embed);
  }
});


client.on("message", async message => {
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send(
        `${message.author} **você não pode postar link de outros servidores aqui!**`
      );
  }
});


client.on("ready", () => {
  var content = "Servidor Da HYPED, Estou ON";
  var channel = client.guilds.cache
    .get("732323095020306464") // Id do Servidor
    .channels.cache.get("732323095851040914"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel.send(content); 
  }, 1000 * 60 * 60 * 1); 
  channel.send(content);
  console.log("BOT Online!");
})


client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}ajuda para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
});


client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});


client.login(process.env.TOKEN);