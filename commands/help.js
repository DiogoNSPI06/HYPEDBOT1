const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Utilize: h!ajuda !`)
    .setColor("RANDOM")
  message.channel.send(embed);
};