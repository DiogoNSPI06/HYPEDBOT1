const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
  const ajuda = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Lista de comandos!**")
    .setDescription("Reaja abaixo para mostrar o devido comando!")
    .addField('Reaja com:' 
     ,`🔍-Informações
     ,🔧-Staff 
     ,😆-Diversão
     ,↩-Voltar`)
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
    
  message.channel.send(ajuda).then(msg => {
    msg.react('🔍').then(r => {
      msg.react('🔧').then(r1 => {
    msg.react('😆').then(r2 => {
      msg.react('↩').then(r3 => {
      })
    })
  })
    
    const infosFilter = (reaction, user) => reaction.emoji.name === '🔍' && user.id === message.author.id;
    const admFilter = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.name === '😆' && user.id === message.author.id;
    const backFilter = (reaction, user) =>
    reaction.emoji.name === '↩' && user.id === 
    message.author.id;
    
    const infos = msg.createReactionCollector(infosFilter);
    const adm = msg.createReactionCollector(admFilter);
    const fun = msg.createReactionCollector(funFilter);
    const back =msg.createReactionCollector(backFilter);

    infos.on('collect', r => {
      const infoembed = new Discord.MessageEmbed()
      
      .setColor('RANDOM')
      .setTitle("Comandos informativos!")
      .setDescription("Meu Prefixo **h!**")
      .addField('Meus Comandos', `h!ajuda - Exibe o menu de ajuda.
h!invites - Mostra o rank de convites.
h!lembrete <tempo> <lembrete> - Te lembra de algo importante.
h!ping - Mostra o delay bot-servidor.
h!tempo - Mostra como está o tempo na sua cidade!
h!invites - quantidade de invites de cada pessoa!
h!bot - Repositório do BOT
h!invitebot - Me adicione em seu servidor!
h!uptime - o horário em que eu acordei!`)
      msg.edit(infoembed)
      
    })
    
    adm.on('collect', r1 => {
      const embedd = new Discord.MessageEmbed()
      
      .setColor('RANDOM')
      .setTitle("Comandos de administração!")
      .setDescription("Meu Prefixo **h!**")
      .addField('Meus Comandos', `h!clear ou h!limpar <1-99>- Limpa as mensagens!
h!warn - Avisa um usuário.
h!denunciar - Denuncia um membro
h!ban <usuário> <razão> - Bane um usuário.
h!mute <usuário> <tempo> <razão> - Muta um usuário por certo tempo.
h!unban <usuário> - Desbane um usuário.
h!unmute <usuário> - Desmuta um usuário.
h!embed <mensagem> - Cria um embed apartir de uma mensagem.
h!serverinfo - informações do servidor!
h!userinfo - informações do usuario!
h!botinfo - informações do BOT!`)
      msg.edit(embedd)
      
    })
    
    fun.on('collect', r2 => {
      const embeddiversao = new Discord.MessageEmbed()
      
      .setColor('RANDOM')
      .setTitle("Comandos de diversão!")
      .setDescription("Meu Prefixo **h!**")
      .addField('Meus Comandos:', `h!dados <quantidade> - Joga até 5 dados na mesa.
h!coinflip - Joga moeda para cima.
h!random - Mostra aleatoriamente um número.
h!say <mensagem> - Faz com que eu repita uma frase.
h!bigtext - <mensagem> Faz uma mensagem com letras grandes !
h!reverse - Inverte sua mensagem !
h!lenny - Aquela carinha. ( ͡ʘ ͜ʖ ͡ʘ)
h!guess - Acerte o número aleatório em 10 tentativas.
h!howgay <usuário> - Responde se vc é gay!
h!8ball <mensagem> - Responde suas perguntas.
h!biscoito <usuário> - Da um biscoito para um usuário. 
h!morse <mensagem> - Transforma um texto em código morse.
h!dog - Mostra uma imagem fofinha de cachorro.`)
      msg.edit(embeddiversao)
      
    })
    back.on('collect', r3 => {
      const backembed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**Lista de comandos!**")
    .setDescription("Reaja abaixo para mostrar o devido comando!")
    .addField('Reaja com:'
     ,`🔍-Informações
     ,🔧-Staff 
     ,😆-Diversão
     ,↩-Voltar`)
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))
    msg.edit(backembed)
    })
  })  
})} 