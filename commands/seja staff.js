const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Este comando não existe!`)
    .addField(`Acho que você queria digitar **h!verificar**!`)
    .setColor("RANDOM")
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};