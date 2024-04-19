
const { EmbedBuilder } = require('discord.js');
let count = 0
module.exports = {
    name: 'bc-online',
    cooldown: 10,
    


    run: async( Client, Message, Args ) => {
            if ( !Message.member.permissions.has('Administrator')) return;
            const message = Message.content.split(' ').slice(1).join(' ')
            if (!message) return Message.reply({ content: `**برجاء ادخال رساله**`})
            Message.reply({ content: `**تم الارسال الي الاونلاين**`}).then(async (msg) => {
            if (message) {
                Message.guild.members.cache.filter(User => ['online', 'dnd', 'idle'].includes(User.presence?.status)).forEach( async Member => {
                  if (Member.user.bot) return;
                  Member.send({ content: `${message}\n\n${Member}`}).then(async () => {
                    count++;
                    await msg.edit({ content: ``, embeds: [new EmbedBuilder().setColor('Random').setThumbnail().setTimestamp().setTitle('Broadcast Online').setDescription(`**${Member} تم الارسال الي العضو :  \n\المرسل اليهم: ${count}**`)]})
                  }).catch((err) => {
                    return;
                  })
                })
            }
        })}
    }
