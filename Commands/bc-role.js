const { EmbedBuilder } = require('discord.js');
let count = 0
module.exports = {
    name: 'bc-role',
    cooldown: 10,


    run: async( Client, Message, Args ) => {
            const Owner = Bot.Owner
            if ( !Message.member.permissions.has('Administrator')) return;
            const message = Message.content.split(' ').slice(2).join(' ')
            if (!message) return Message.reply({ content: `**برجاء ادخال رساله**`})
            const roleId = Args[0] 
            if (!Message.guild.roles.cache.get(roleId)) return Message.reply({ content: `Add Role ID`})

            Message.reply({ content: `**تم الارسال الي رتبه**`}).then(async (msg) => {
            if (message) {
                const membersWithRole = Message.guild.members.cache.filter(member => {
                    return member.roles.cache.find(r => r.id === roleId); 
                  });
                  membersWithRole.forEach( async Member => {
                  if (Member.user.bot) return;
                  Member.send({ content: `${message}\n\n${Member}`}).then(async () => {
                    count++;
                    await msg.edit({ content: ``, embeds: [new EmbedBuilder().setColor('Random').setThumbnail().setTimestamp().setTitle('Broadcast Role').setDescription(`**${Member} تم الارسال الي : \n\المرسل اليهم: ${count}**`)]})
                  }).catch((err) => {
                    return;
                  })
                })
            }
        })}
    }
