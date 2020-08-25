const db = require("quick.db")
module.exports.run = async (client, message, args) => {
  message.delete()
  if(!message.member.permissions.has("ADMINISTRATOR")) {
    return message.reply("Você precisa ser um administrador para executar esse comando!")
  }
  
  let prefixo = args[0]
  if(!prefixo) return message.reply("Você precisa escolher o prefixo!")
  db.set(`prefixo_${message.guild.id}`, prefixo)
  message.reply(`O prefixo do bot foi trocado com sucesso, novo prefixo: \`${prefixo}\``)
  
}