const Discord = require('discord.js')
const c = require('../config.json')
exports.run = async (client, message, args) => {
    await message.author.createDM()
    message.delete()
    message.channel.send(`${message.author}, a denuncia foi enviada no seu PV! 🕰`)
    message.author.send(`${message.author}, este é o sistema de denuncias!
    
    Para **cancelar** o envio, digite \`CANCELAR\` a qualquer momento da aplicação.
    Para **continuar** digite \`CONTINUAR\` aqui neste chat.`)

    var main = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {
        time: 100000 * 50,
        max: 1
    })

    main.on('collect', a => {

        const pergun1 = new Discord.MessageEmbed()
            .setColor(c.discord)
            .setDescription(`**0%** [\`..........\`] 
        \`\`\`fix
Quem voce quer denunciar?\`\`\` `)

        if (a.content.toLowerCase() === "cancelar") return message.author.send('O processo de requisição foi cancelado.');
        if (a.content.toLowerCase() === "continuar") message.author.send(pergun1)

        var prg2 = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
            time: 100000 * 50,
            max: 1
        })

        prg2.on('collect', b => {
            if (b.content.toLowerCase() === "cancelar") return message.author.send('O processo de requisição foi cancelado.');
            let n1 = b.content
            const pergun2 = new Discord.MessageEmbed()
                .setColor(c.discord)
                .setDescription(`**33,3** [\`███.......\`] 
        \`\`\`fix
#2 - O que esta pessoa fez de que descumpra as regras? <prova>.\`\`\``)
            message.author.send(pergun2)


            var prg3 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                time: 100000 * 50,
                max: 1
            })

            prg3.on('collect', c => {
                if (c.content.toLowerCase() === "cancelar") return message.author.send('O processo de requisição foi cancelado.');
                let n2 = c.content
                const pergun3 = new Discord.MessageEmbed()
                    .setColor(c.discord)
                    .setDescription(`**66,6%** [\`██████....\`] 
        \`\`\`fix
#3 - Porque  Bani-lo??\`\`\``)
                message.author.send(pergun3)

                var fim = message.author.dmChannel.createMessageCollector(d => d.author.id == message.author.id, {
                    time: 100000 * 50,
                    max: 1
                })

                fim.on('collect', d => {
                    let n3 = d.content
                    const fimn = new Discord.MessageEmbed()
                        .setColor(c.discord)
                        .setDescription(`**100%** [\`██████████\`] 
        \`\`\`fix
Sua Denúncia foi enviada!\`\`\``)
                    message.author.send(fimn)




                    const verif = new Discord.MessageEmbed()
                        .setColor(c.discord)
                        .setDescription(`Uma Denúncia foi recebida!

**•** Usuário: ${message.author}
**•** Ao usuário referente: **${n1}**
**•** Seu descumprimento: **${n2}**
**•** Porque baní-lo: **${n3}**
`)

                        .setFooter("Sistema de Denúncias", message.author.avatarURL)
                    client.channels.cache.get("734518143023841340").send(verif).then(msg => {
                      send(verif).then(msg => {
                        msg.react(checked).then(r => {
                            msg.react(unchecked)


                        
                                })
                            })



                        })
                    })


                })
            })
        })
    }


exports.help = {
    name: "requisitar",
    aliases: [
        'reqtag',
        'pedirtag'
    ]
}