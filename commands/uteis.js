const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Como posso ajudar?`)
    .setColor("RANDOM")
    .setDescription(`**
    Meu Prefixo: h!
    Meus Comandos: h!ping, h!say(mensagem), h!uptime, h!clear, h!serverinfo, h!botinfo, h!coinflip,  h!emoji, h!userinfo, h!ajuda(beta)**`)
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};