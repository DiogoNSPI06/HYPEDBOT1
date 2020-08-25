const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Meu servidor!`)
    .addField(`https://discord.gg/Dvqx9rU`)
    .setColor("RANDOM")
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};