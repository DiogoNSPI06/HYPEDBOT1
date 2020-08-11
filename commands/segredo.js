const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete();
  const embed = new Discord.MessageEmbed()
    .setTitle(`SEGREDO`)
    .setColor("#131111")
    .setDescription(`**Você descobriu um segredo, não conte para ninguém!**`)
  message.channel.send(embed);
};