const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Está afim de me adicionar? Clique aqui -> https://botsparadiscord.com/bots/738915886769111111 !`)
    .setColor("RANDOM")
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};