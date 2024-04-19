const { EmbedBuilder } = require('discord.js');
let count = 0
module.exports = {
    name: 'bc-all',
    cooldown: 10,
    


    run: async( Client, Message, Args ) => {
            if ( !Message.member.permissions.has('Administrator')) return;
            const message = Message.content.split(' ').slice(1).join(' ')
            if (!message) return Message.reply({ content: `**برجاء ادخال رساله**`})

            Message.reply({ content: `**Done send all members**`}).then(async (msg) => {
            if (message) {
                Message.guild.members.cache.forEach( async Member => {

                  if (Member.user.bot) return;
                  Member.send({ content: `${message}\n\n${Member}`}).then(async () => {
                    count++;
                    await msg.edit({ content: ``, embeds: [new EmbedBuilder().setColor('Random').setThumbnail().setTimestamp().setTitle('Broadcast All').setDescription(`** تم ارسال الي : ${Member}\n\hالمرسل الليهم : ${count}**`)]})
                  }).catch((err) => {
                    return;
                  })
                })
            }

        })}
    }