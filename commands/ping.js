const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('Ping né?');

  const embed = new Discord.MessageEmbed()
    .setTitle(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`)
    .setColor("RANDOM")
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};