const Discord = require('discord.js');
const c = require('../config.json')

module.exports.run = async (client, message, args) => {
    message.delete()

    const erros = new Discord.MessageEmbed()
        .setAuthor("Equipe HYPED - Erro", client.user.avatarURL)
        .setDescription(`${message.author}, não consigo enviar mensagem para você, ative suas mensagens diretas!`)
        .setTimestamp()
        .setThumbnail(client.user.avatarURL)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setColor('RANDOM')

    const yes = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} - Ajuda`)
        .setDescription(` ${message.author}, enviei meus comandos em seu privado!`)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(yes).then(msg => msg.delete(12000))

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} - Ajuda`)
        .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria!
        E Meu Prefixo é "h!"`)
        .addField(`⭐ **Informações**`, '• `ajuda`, `server`, `user`, `sugerir`, `avatar`...')
        .addField(`👦 **Usuário**`, '• `portfolio`, `recomendações`, `reputação`...')
        .addField(`😂 **Diversão**`, '• `lenny`, `coinflip`, `dados`...')
        .addField(`🔧 **Staff**`, '• `ban`, `mute`, `chat`, `limpar`...')
        .setFooter(`© Código de ! Diogo06™#2369`)
        .setTimestamp()
        .setColor('RANDOM')
    message.author.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
        await msg.react('⭐')
        await msg.react('👦')
        await msg.react('😂')
        await msg.react('🔧')
        await msg.react("↩")


        const informacao = (reaction, user) => reaction.emoji.name === '⭐' && user.id === message.author.id;
        const usuario = (reaction, user) => reaction.emoji.name === '👦' && user.id === message.author.id;
        const diversao = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id;
        const staff = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;

        const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;

        const informacaoL = msg.createReactionCollector(informacao)
        const usuarioL = msg.createReactionCollector(usuario)
        const diversaoL = msg.createReactionCollector(diversao)
        const staffL = msg.createReactionCollector(staff)

        const backL = msg.createReactionCollector(back)


        backL.on('collect', r => {
            const embedd = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                .addField(`⭐ **Informações**`, '• `ajuda`, `server`, `user`, `sugerir`, `avatar`, ...')
                .addField(`👦 **Usuário**`, '• `portfolio`, `recomendações`, `reputação`...')
                .addField(`😂 **Diversão**`, '• `lenny`, `coinflip`, `dados`...')
                .addField(`🔧 **Staff**`, '• `ban`, `mute`, `chat`, `limpar`...')
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setColor("RANDOM")
            msg.edit(embedd)
        })

        informacaoL.on('collect', r => {

            const embedinformacao = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`⭐ **UTEIS**

                h!ajuda - Exibe o menu de ajuda.
                h!invites - Mostra o rank de convites.
                h!lembrete \`<tempo>\` \`<lembrete>\` - Te lembra de algo importante.
                h!ping - Mostra o delay bot-servidor.
                h!imgur \`<img>\` - Faz upload de uma imagem para o Imgur.
                h!invites - quantidade de invites de cada pessoa!
                h!verificar - Se verifica para a staff.
                h!bot - Repositório do BOT
                h!invitebot - Me adicione em seu servidor!
                h!uptime - o horário em que eu acordei!


         `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embedinformacao)
        })

        usuarioL.on('collect', r => {
            const embedusuario = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`👦 **USUARIO**
                
                h!fortinte
                h!recomendações - Mostra seus pontos de recomendação.
                h!recomendar - \`<@user>\` - Recomende um usuário.

        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embedusuario)
        })

        diversaoL.on('collect', r => {
            const embeddiversao = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`😂 **DIVERSÃO**
                        
                h!dados \`<quantidade>\` - Joga até 5 dados na mesa.
                h!coinflip - Joga moeda para cima.
                h!random - Mostra aleatoriamente um número.
                h!say \`<mensagem>\` - Faz com que eu repita uma frase.
                h!bigtext - <mensagem> Faz uma mensagem com letras grandes !
                h!reverse - Inverte sua mensagem !
                h!lenny - Aquela carinha. ( ͡ʘ ͜ʖ ͡ʘ)
                h!guess - Acerte o número aleatório em 10 tentativas.
                h!8ball \`<mensagem>\` - Responde suas perguntas.
                h!biscoito \`<usuário>\` - Da um biscoito para um usuário. 🍪
                h!tapa \`<usuário>\` - Da um tapa em um usuário.
                h!morse \`<mensagem>\` - Transforma um texto em código morse.
                h!dog - Mostra uma imagem fofinha de cachorro.
                h!cat - Mostra uma imagem fofinha de gato.

        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embeddiversao)
        })

        staffL.on('collect', r => {
            const embeddiversao = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`🔧 **Staff**

                h!clear ou h!limpar <1-99>- Limpa as mensagens!
                h!warn - Avisa um usuário.
                h!denunciar - Denuncia um mebro       
                h!ban \`<usuário>\` \`<razão>\` - Bane um usuário.
                h!mute \`<usuário>\` \`<tempo>\` \`<razão>\` - Muta um usuário por certo tempo.
                h!unban \`<usuário>\` - Desbane um usuário.
                h!unmute \`<usuário>\` - Desmuta um usuário.
                h!embed \`<mensagem>\` - Cria um embed apartir de uma mensagem.
                h!serverinfo - informações do servidor!
                h!userinfo - informações do usuario!
                h!botinfo - informações do BOT!
 
        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embeddiversao)
        })

    })
}

exports.help = {
    name: "ajuda",
    aliases: ['help']
}