const { Client, GatewayIntentBits, Collection, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.1(\'2 3 4!\');0.1(\'5 6 7 \');0.1(\'8:',9,9,'console|log|Bot|is|online|Code|by|Venom|https'.split('|'),0,{}))
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences
    ]  
  });

  client.Çɱɗ = new Collection()
  client.Çʍɗ = new Collection()
  client.Prefix = '+'
  const fs = require('fs')
  fs.readdirSync(`${process.cwd()}/Handler/`).forEach((Handler) => {
      require(`${process.cwd()}/Handler/${Handler}`)(client)
  })
  client.on('messageCreate', Message => {
    if (Message.content.startsWith('ss')) {
      Message.reply({ content: `hh`})
    }
  });
 
  client.login(process.env.token)
