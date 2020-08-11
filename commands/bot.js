const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Meu Repositório:
    https://github.com/DiogoNSPI06/HYPEDBOT1`)
    .setColor("RANDOM")
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};
