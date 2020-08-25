const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('<a:baiacu:746144169516335126>=🏓**| Ping!**');

  const embed = new Discord.MessageEmbed()
    .setTitle(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms<a:wifi:746887756600443031>.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms<a:wifi:746887756600443031>**`)
    .setColor("RANDOM")
    .setThumbnail('https://imgur.com/2S8aOAJ.png')
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed).then(msg => {
    msg.react('↩').then(r => {

    })
    const pingFilter = (reaction, user) =>
    reaction.emoji.name === '↩' && user.id ===
    message.author.id;

    const ping = msg.createReactionCollector(pingFilter);

    ping.on('collect', r => {
      const pingembed = new Discord.MessageEmbed()

    .setTitle(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms<a:wifi:746887756600443031>.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms<a:wifi:746887756600443031>**`)
    .setColor("RANDOM")
    .setThumbnail('https://imgur.com/2S8aOAJ.png')
    .setFooter(`© Código de ! Diogo06™#2369`)
    msg.edit(pingembed)

    })
  })
};