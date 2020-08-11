if(command === "unmute") {
let reason = args.slice(1).join(' ');
let user = message.mentions.users.first();
let logchannel = message.guild.channels.find('name', 'cgr420-logs');
let role = message.guild.roles.find('name', 'mute')
//CHANGE THIS ^^

if (!logchannel) return message.reply('I cannot find a logs channel');
if (!message.member.hasPermission("MUTE_MEMBERS")) return 
message.reply(":no_entry_sign: **Error:** You don't have the **Mute Members** 
permission!");
if (reason.length < 1) return message.reply('You must supply a reason for the mute.');
if (message.mentions.users.size < 1) return message.reply('You must mention 
someone to mute them.').catch(console.error);

if (!message.guild.member(user).roles.has(role)) return message.reply(`:no_entry_sign: I cannot unmute that member`);
message.guild.member(user).removeRole(role);

const embed = new Discord.RichEmbed()
  .setColor("0xFF0000")
  .setTimestamp()
  .addField('Action:', 'Unmute')
  .addField('User:', `${user.tag} (${user.id})`)
  .addField('Moderator:', 
  `${message.author.tag}`)
  .addField('Reason', reason);
  message.channel.send(`:hammer: Bippity boppity **UNMUTED**! I\'ve logged the 
  unmute in the logs channel.`)
  return logchannel.send(embed);
  };