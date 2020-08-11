const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Me adicione:
    https://discord.com/oauth2/authorize?client_id=738915886769111111&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FDvqx9rU&scope=bot`)
    .setColor("RANDOM")
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};