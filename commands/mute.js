var Discord = require('discord.js');
var ms = require('ms');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Você não pode usar isso.!');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Você não mencionou o usuario :>');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('Ele(a) não esta no servidor!');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply(' Você não pode silenciar essa pessoa!');

    var rawTime = args[1];
    var time = ms(rawTime);
    if(!time) return msg.reply('Você não especificou um tempo!');

    var reason = args.splice(2).join(' ');
    if(!reason) return msg.reply('Você precisa dar uma razão!');

    var channel = msg.guild.channels.cache.find(c => c.name === '💬┃вατє-ραρσ');

    var log = new Discord.MessageEmbed()
    .setTitle('User Muted')
    .addField('User:', user, true)
    .addField('By:', msg.author, true)
    .addField('Expires:', rawTime)
    .addField('Reason:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('Você esta mutado!')
    .addField('Expires:', rawTime, true)
    .addField('Reason:', reason, true);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    var role = msg.guild.roles.cache.find(r => r.name === 'Muted');

    member.roles.add(role);

    setTimeout(async() => {
        member.roles.remove(role);
    }, time);

    msg.channel.send(`**${user}** Foi mutado **${msg.author}** por **${rawTime}**!`);
}