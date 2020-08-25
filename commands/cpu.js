const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Digitou algo errado?`)
    .addField(`Acho que você queria digitar **h!botinfo**?`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};