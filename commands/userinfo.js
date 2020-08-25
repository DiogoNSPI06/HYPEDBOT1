const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function (client, message, args, params) {
    message.delete();
    let user = message.mentions.users.first();
    if (!user) return message.reply("❌|Mencione um **usuário**!");
    const inline = true
    const status = {
      online: ' `🟢` Online',
      idle: ' `🟠` Ausente',
      dnd: ' `🔴` Não pertubar',
      offline: ' `⚫️` Offline'
    }
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
    const target = message.mentions.users.first() || message.author
    const bot = member.user.bot ? '`🤖` Sim' : ' `🙂` Não'

    const embed = new Discord.MessageEmbed()
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setColor('RANDOM')
      .setAuthor('🔍| Informações do usuário')
      .addField('**#|Tag**', `${member.user.tag}`, inline)
      .addField('**👾|ID**', member.user.id, inline)
      .addField('**📎|Nickname**', `${member.nickname !== null ? `Nickname: ${member.nickname}` : 'Nenhum'}`, true)
      .addField('**📌|Status**', `${status[member.user.presence.status]}`, inline, true)
      .addField('**🎮|Jogando**', `${member.user.presence.game ? `${member.user.presence.game.name}` : ' Nada'}`, inline, true)
      .addField('**📥|Entrou no Discord em**', formatDate('DD/MM/YYYY, às HH:mm:ss', member.user.createdAt))
      .addField('**🚪|Entrou no servidor em**', formatDate('DD/MM/YYYY, às HH:mm:ss', member.joinedAt))
      .setTimestamp()
      .setFooter(`© Código de ! Diogo06™#2369`)
      message.channel.send(embed).then(msg => {
        msg.react('▶️').then(r => {
        msg.react('◀️').then(r1 => {

         })
        
        const ladoFilter = (reaction, user) =>
        reaction.emoji.name === '▶️' && user.id ===
        message.author.id;
        const lado2Filter = (reaction, user) =>
        reaction.emoji.name === '◀️' && user.id ===
        message.author.id;

        const lado = msg.createReactionCollector(ladoFilter)
        const lado2 = msg.createReactionCollector(lado2Filter)

        lado.on('collect', r => {
          const ladoembed = new Discord.MessageEmbed()

          .setTitle('🔍| Mais Informações do usuário')
          .setColor('RANDOM')
          .addField('Comando solicitado por',`${message.member.displayName}`,inline)
          .addField('**🤖|Bot**', `${bot}`, inline, true)
          .addField('**💼|Cargos**', message.member.roles.cache.array())
          .setTimestamp()
          .setFooter(`© Código de ! Diogo06™#2369`)
          msg.edit(ladoembed)
        })
        
        lado2.on('collect', r1 => {
          const lado2embed = new Discord.MessageEmbed()

          .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
          .setColor('RANDOM')
          .setAuthor('🔍| Informações do usuário')
          .addField('**#|Tag**',`${member.user.tag}`, inline)
          .addField('**👾|ID**', member.user.id, inline)
          .addField('**📎|Nickname**', `${member.nickname !== null ? `Nickname: ${member.nickname}` : 'Nenhum'}`, true)
          .addField('**📌|Status**', `${status[member.user.presence.status]}`, inline, true)
          .addField('**🎮|Jogando**', `${member.user.presence.game ? `${member.user.presence.game.name}` : ' Nada'}`, inline, true)
          .addField('**📥|Entrou no Discord em**', formatDate('DD/MM/YYYY, às HH:mm:ss', member.user.createdAt))
          .addField('**🚪|Entrou no servidor em**', formatDate('DD/MM/YYYY, às HH:mm:ss', member.joinedAt))
          .setFooter(`© Código de ! Diogo06™#2369`)
          msg.edit(lado2embed)
        })

      })
    })
  }
}
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
