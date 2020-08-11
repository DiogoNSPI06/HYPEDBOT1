const Database = require("../../database.js");
const Discord = require('discord.js')

exports.run = (client, message) => {

    Database.Users.find().sort([
        ['level', 'descending']
    ]).exec((err, res) => {
        if (err) console.log(err);
        let i = 0;
        let embed = new Discord.MessageEmbed()
            .setTitle("Top **5** - XP")
            .setDescription('Interaja em nosso bate-papo diariamente para conseguir xp.')
            .setThumbnail(client.user.avatarURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp()
        if (res.length === 0) { //se o resultado for igual a 0
            embed.setColor("RANDOM");
            embed.addField("Nenhum usuario no banco de dados encontrado", "Converse mais com outros usuários para aparecer aqui.")
        } else if (res.length < 10) { // se o resultado menor q 5
            embed.setColor("RANDOM");
            for (i = 0; i < res.length; i++) {
                let member = client.users.get(res[i]._id)
                if (member) {
                    embed.addField(`**${i + 1}**. ${member.username}#${member.discriminator}`, `**Level**: ${res[i].level} - **XP**: ${res[i].xp}`);
                } else {
                    embed.addField(`**${i + 1}**. ${member.username}#${member.discriminator}`, `**Level**: ${res[i].level} - **XP**: ${res[i].xp}`);
                }
            }
        } else {
            embed.setColor("RANDOM");
            for (i = 0; i < 5; i++) {
                let member = client.users.get(res[i]._id)
                embed.addField(`**${i + 1}**. ${member.username}#${member.discriminator}`, `**Level**: ${res[i].level} - **XP**: ${res[i].xp}`); //adicionamos na embed o nome e os coins do usuario
            }
        }
        message.channel.send(embed)
    })
}

exports.help = {
    name: "rank"
}