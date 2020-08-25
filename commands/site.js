const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Olá quer ver mais de minhas funções? Entre no meu site! =>  https://diogonspi.wixsite.com/hypedbot`)
    .setColor("RANDOM")
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};