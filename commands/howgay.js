var fortunes = [
    "`0%(.......)` GAY! Esse eh macho mesmo hein! https://imgur.com/byAOgIj.png",
    "Não é GAY e nunca será!",
    "`10%(█.........)` GAY! Esse curte só um pouquinho!( ͡° ͜ʖ ͡°) https://imgur.com/byAOgIj.png",
    "`20%(██........)` GAY! Esse está se interessando ( ͡° ͜ʖ ͡°)! https://imgur.com/byAOgIj.png",
    "`30%(███.......)` GAY! Esta no caminho!https://imgur.com/byAOgIj.png",
    "`40%(████......)` GAY! Este já deu para alguém! https://imgur.com/byAOgIj.png",
    "`50%(█████.....)` GAY! Está na metade ( ͡° ͜ʖ ͡°)! https://imgur.com/aCeeWcy.png",
    "`60%(██████....)` GAY! Este está quase lá! https://imgur.com/aCeeWcy.png",
    "`70%(███████...)` GAY! Está no caminho ( ͡° ͜ʖ ͡°)https://imgur.com/aCeeWcy.png",
    "`80%(████████..)` GAY! Esse curte ( ͡° ͜ʖ ͡°)https://imgur.com/aCeeWcy.png",
    "`90%(█████████.)` GAY! Esse está quase lá! https://imgur.com/aCeeWcy.png",
    "`100%(██████████)` GAY! Esse não tem jeito! https://imgur.com/aCeeWcy.png"

  ];
  
  exports.run = (bot, msg, params) => {
  
    if(!params[0]){
      return msg.channel.send(":x: " + "| Mencione um membro!")
    }
    if (params[0]) msg.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else msg.channel.send(":x: " + "| Não foi possível ler! :(");
  
  };
  
  
  exports.help = {
    name : "howgay",
    description: "Te da resposta se vc eh gay!",
    usage: "howgay [membro]"
  };