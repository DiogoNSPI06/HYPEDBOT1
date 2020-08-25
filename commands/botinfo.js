/**
 * O Comando "botinfo"mostrará informações do bot
 */

const Discord = require('discord.js')
const moment = require('moment')
const config = require("./config.json")
const os = require("os");

moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    let cpu = Math.round(process.cpuUsage().system / 1024 / 1024).toString()
    if(cpu < 1) {
        cpu = (process.cpuUsage().system / 1024 / 1024).toFixed(2)
    }
    let ram = Math.round(process.memoryUsage().rss / 1024 / 1024).toString()
    let modelo = os.cpus().map((i) => `${i.model}`)[0]
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.size
    const usersize = client.users.size
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }


    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setThumbnail('https://imgur.com/r00LLTG.png')
      .setAuthor('🤖| Informações Sobre Mim 🙂')
      .addField('**🔧| Meu Prefixo**', `${config.prefix}`)
      .addField('<:DEV:747773973051342849>| Meu Criador', `! Diogo06™#2369`)
      .addField('**📌| Meu nick**', userName)
      .addField('**📎| Meu ID**', client.user.id)
      .addField('**🌎| Servidores**', `${client.guilds.cache.size}`, true)
      .addField('**👫| Usuários**', `${client.users.cache.size}`, inline)
      .addField('🖥️| Host', `https://repl.it + Uptimerobot`)
      .addField(`%|Uso da cpu:`, `${cpu}%`, true)
      .addField(`<:Ram:747503404426723350>|Uso da ram`, `${ram}MB`, true)
      .addField(`<:Xeon:747503107365142649>|Modelo da cpu`, `Processador Intel® Xeon® E5-2630`)
      .addField('**👾| Status**',`Assistindo **Utilize h!ajuda para obter ajuda!**`,inline,true)
      .addField('**🗓️| Estou online a**', '`Algum Tempo`')
      .addField('**📊| Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .setFooter(`2020 © H Y P E D.`)
      .setTimestamp()
    message.channel.send(embed).then(msg => {
      msg.react('↩').then(r => {

      })
      const pingFilter = (reaction, user) =>
      reaction.emoji.name === '↩' && user.id ===
      message.author.id;

      const ping = msg.createReactionCollector(pingFilter);

      ping.on('collect', r => {
      const pingembed = new Discord.MessageEmbed()

      .setColor('RANDOM')
      .setThumbnail('https://imgur.com/r00LLTG.png')
      .setAuthor('🤖| Informações Sobre Mim 🙂')
      .addField('**🔧| Meu Prefixo**', `**${config.prefix}**`)
      .addField('<:DEV:747773973051342849>| Meu Criador', `! Diogo06™#2369`)
      .addField('**📌| Meu nick**', userName)
      .addField('**📎| Meu ID**', client.user.id)
      .addField('**🌎| Servidores**', `${client.guilds.cache.size}`, true)
      .addField('**👫| Usuários**', `${client.users.cache.size}`, inline)
      .addField('🖥️| Host', `https://repl.it + Uptimerobot`)
      .addField(`%|Uso da cpu:`, `${cpu}%`, true)
      .addField(`<:Ram:747503404426723350>|Uso da ram`, `${ram}MB`, true)
      .addField(`<:Xeon:747503107365142649>|Modelo da cpu`, `Processador Intel® Xeon® E5-2630`)
      .addField('**👾| Status**',`Assistindo **Utilize h!ajuda para obter ajuda!**`,inline,true)
      .addField('**🗓️| Estou online a**', `Algum Tempo`)
      .addField('**📊| Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .setFooter(`2020 © H Y P E D.`)
      .setTimestamp()
      msg.edit(pingembed)
      })
    })
  },

  conf: {},

  get help () {
    return {
      name: 'botinfo',
      category: 'Info',
      description: 'Mostra informações do bot.',
      usage: 'botinfo'
    }
  }
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}