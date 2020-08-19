const Discord = require('discord.js')
const c = require('../config.json')
const moment = require ('moment')
exports.run = (client, message, args) => {

    const online = `🟢`
    const ocupado = `🔴`
    const ausente = `🟠`
    const offline = `⚫️`


    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} - Informações`, message.guild.iconURL)
        .setColor("RANDOM")
        .addField("🧾 Nome do servidor", message.guild.name)
        .addField('👑 Criador do servidor', message.guild.owner, true)
        .addField('🌎 Região do servidor', message.guild.region.charAt(0).toUpperCase() + message.guild.region.slice(1), true)
        .setThumbnail(sicon)
        .addField('🔹 Nível de boost', message.guild.verificationLevel, true)
        .addField('💬 Total de salas', message.guild.channels.size, true)
        .addField(`🙋‍ Membros (${message.guild.members.size})`, true)
        .addField('\n \n 📅 Servidor criado em', moment(message.guild.createdAt).format("D MMMM YYYY, h:mm:ss"))

    return message.channel.send(serverembed);
}

exports.help = {
    name: 'serverinfo',
    description: 'Verifica as informações do servidor',
    usage: 'serverinfo',
    aliases: ['server']
};