const { EmbedBuilder } = require('discord.js');
const count = 0
module.exports = {
    name: 'bc-all',
    type: 1,
    description: 'Send to everyone inside the server',
    options: [
        {
            name: 'message',
            type: 3,
            description: 'add message',
            required: true
        }
    ],


    run: async( Client, Interaction ) => {
            if (!Interaction.member.permissions.has('Administrator')) return;
            const message = Interaction.content.split(' ').slice(1).join(' ')
            Interaction.reply({ content: `**جاري الارسال الي الجميع**`}).then(async (msg) => {
            if (message) {
                Interaction.guild.members.cache.forEach( async Member => {
                  if (Member.user.bot) return;
                  Member.send({ content: `${message}\n\n${Member}`}).then(async () => {
                    count++;
                    await msg.edit({ content: ``, embeds: [new EmbedBuilder().setColor('Random').setThumbnail().setTimestamp().setTitle('Broadcast All').setDescription(`**${Member} تم الارسال الي :  \n\المرسل الييهم: ${count}**`)]})
                  }).catch((err) => {
                    return;
                  })
                })
            }

        })}
    }
