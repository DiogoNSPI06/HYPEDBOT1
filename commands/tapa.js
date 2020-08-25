const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!user) return message.channel.send("Não encontrei o usuário mencionado.");

    let cookies = [
    'https://cdn.discordapp.com/attachments/747442375655293000/747533093409259530/6jy0j2.gif', 
    'https://cdn.discordapp.com/attachments/734231560668315728/747825814308913312/43a30a58f59d591b5791879f985d5e95.gif', 
    'https://tenor.com/view/slap-gif-9342231', 
    'https://tenor.com/view/punch-in-the-face-gif-14279719'
];

let cookembed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`<@${message.author.id}> deu um tapa em <@${user.id}>! `)
.setImage(cookies[Math.floor(Math.random() * cookies.length)])

message.channel.send(cookembed)
   
}

module.exports.help = {
    name: 'biscoito'
}