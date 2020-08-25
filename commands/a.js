const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Fui atualizado!`)
    .setColor("#2826d4")
    .setDescription(`**Veja minhas atualizações no meu servidor! Digite h!discord**`)
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};