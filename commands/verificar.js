const Discord = require('discord.js')
const c = require('../config.json')
exports.run = async (client, message, args) => {
    await message.author.createDM()
    message.delete()
    message.channel.send(`${message.author}, a verificação foi enviada em seu privado! 🕰`)
    message.author.send(`${message.author}, este é o sistema de verificação de cargos, responda-os!
    
    Caso seja **aprovado**, setaremos sua tag.
    Entretanto, caso seja **reprovado**, você será notificado que não foi aprovado.
    
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
A qual cargo você deseja ser verificado?
Ex: Staff.\`\`\` `)

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
                .setDescription(`**30,0** [\`███.......\`] 
        \`\`\`fix
#2 - O por que deseja este cargo?
Ex: Pois sou experiente nesse requisito <prova>.\`\`\``)
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
                    .setDescription(`**65,0%** [\`██████....\`]
        \`\`\`fix
#3 - Resumo detalhado das regras.\`\`\``)
            message.author.send(pergun3)


            var prg4 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                time: 100000 * 50,
                max: 1
            })

            prg4.on('collect', c => {
                if (c.content.toLowerCase() === "cancelar") return message.author.send('O processo de requisição foi cancelado.');
                let n3 = c.content
                const pergun4 = new Discord.MessageEmbed()
                    .setColor(c.discord)
                    .setDescription(`**80,0%** [\`████████..\`] 
        \`\`\`fix
#4 - Por que adicionar você ao cargo definido?
Ex: Pois sei manejar o servidor bem!\`\`\``)
                message.author.send(pergun4)

                var fim = message.author.dmChannel.createMessageCollector(d => d.author.id == message.author.id, {
                    time: 100000 * 50,
                    max: 1
                })

                fim.on('collect', d => {
                    let n4 = d.content
                    const fimn = new Discord.MessageEmbed()
                        .setColor(c.discord)
                        .setDescription(`**100%** [\`██████████\`] 
        \`\`\`fix
Seu pedido de verificação foi enviado!\`\`\``)
                    message.author.send(fimn)




                    const verif = new Discord.MessageEmbed()
                        .setColor(c.discord)
                        .setDescription(`Um novo usuário solicitou verificação!

**•** Usuário: ${message.author}
**•** Ao cargo referente: **${n1}**
**•** Seu portfólio: **${n2}**
**•** Resumo detalhado: **${n3}**
**•** Sua prova de autoria: **${n4}**
`)

                        .setFooter("Sistema de verificação para a staff", message.author.avatarURL)
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


,exports.help = {
    name: "requisitar",
    aliases: [
        'reqtag',
        'pedirtag'
    ]
})}