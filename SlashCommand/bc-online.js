const { EmbedBuilder } = require('discord.js');
const count = 0
module.exports = {
    name: 'bc-online',
    type: 1,
    description: 'Send to both of them on online status',
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
            Interaction.reply({ content: `**تم الارسال الي من هم اونلاين**`}).then(async (msg) => {
            if (message) {
                Interaction.guild.members.cache.filter(User => ['online', 'dnd', 'idle'].includes(User.presence?.status)).forEach( async Member => {
                  if (Member.user.bot) return;
                  Member.send({ content: `${message}\n\n${Member}`}).then(async () => {
                    count++;
                    await msg.edit({ content: ``, embeds: [new EmbedBuilder().setColor('Random').setThumbnail().setTimestamp().setTitle('Broadcast Online').setDescription(`**${Member} تم الارسال الي العضو \n\المرسل اليهم: ${count}**`)]})
                  }).catch((err) => {
                    return;
                  })
                })
            }
        })}
    }
