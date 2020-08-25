const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (client, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let user = message.mentions.users.first() || message.author
  const embed = new Discord.MessageEmbed()
    .setTitle(`🖼️ ${user.tag}`)
    .setColor("RANDOM")
    .setImage(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setFooter(`© Código de ! Diogo06™#2369`)
  message.channel.send(embed);
};
exports.help = {
    name: 'avatar',
    description: 'Mostra o avatar de um usuário',
    usage: 'avatar'
};

