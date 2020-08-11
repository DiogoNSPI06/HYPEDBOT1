const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Está em Dúvidas Sobre usar Comandos?`)
    .setColor("#2826d4")
    .setDescription(`**Utlize h!help e veja os comandos do nosso BOT!**`)
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};