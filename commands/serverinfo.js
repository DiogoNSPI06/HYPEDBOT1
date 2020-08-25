
const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const date = message.guild.createdAt
    const joined = message.member.joinedAt

    const region = {
      brazil: ':flag_br: Brazil'
    }

    const embed = new Discord.MessageEmbed()
      .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
      .setAuthor('🔍| Informações do servidor')
      .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
      .addField('**📌| Nome**', message.guild.name, true)
      .addField('**📎| ID**', message.guild.id, true)
      .addField('**👑| Dono(a)**', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField('🔹| Nível de boost',message.guild.verificationLevel, true)
      .addField('👥| Membros', message.member.guild.memberCount, true)
      .addField('**🌎| Região**', region[message.guild.region], true)
      .addField('**💬| Canais**', message.guild.channels.cache.size, true)
      .addField('**📥| Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('**🚪| Você entrou em**', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))
      .setFooter(`© Código de ! Diogo06™#2369`)
      .setTimestamp()


    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'serverinfo',
      category: 'Info',
      description: 'Informação sobre o servidor',
      usage: 'serverinfo'
    }
  }
}


function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
