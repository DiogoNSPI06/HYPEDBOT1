const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (client, message, args) => {
      let user = message.mentions.users.first() || message.author
      const embed = new Discord.MessageEmbed()
            .setTitle(`🖼️ ${user.tag}`)
            .setDescription(`**Clique ([aqui])$)      .setThumbnail(`,$={message.author},displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
    message.channel.send({embed})
}
exports.help = {
    name: 'avatar',
    description: 'Mostra o avatar de um usuário',
    usage: 'avatar'
};

