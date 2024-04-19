const { EmbedBuilder } = require('discord.js');
const count = 0
module.exports = {
    name: 'bc-role',
    type: 1,
    description: 'Send to everyone inside the role',
    options: [
        {
            name: 'role',
            type: 8,
            description: 'Select the role',
            required: true
        },
        {
            name: 'message',
            type: 3,
            description: 'add message',
            required: true
        }
    ],


    run: async( Client, Interaction ) => {
            if (!Interaction.member.permissions.has('Administrator')) return;
            const message = Interaction.content.split(' ').slice(2).join(' ')
            Interaction.reply({ content: `**تم الارسال الي مالكين الرتبه**`}).then(async (msg) => {
            if (message) {
                const roleId = Interaction.options.getRole('role')
                const membersWithRole = Interaction.guild.members.cache.filter(member => {
                    return member.roles.cache.find(r => r.id === roleId.id); 
                  });
                  membersWithRole.forEach( async Member => {
                  if (Member.user.bot) return;
                  Member.send({ content: `${message}\n\n${Member}`}).then(async () => {
                    count++;
                    await msg.edit({ content: ``, embeds: [new EmbedBuilder().setColor('Random').setThumbnail().setTimestamp().setTitle('Broadcast Online').setDescription(`**${Member} تم الارسال الي العضو\n\المرسل اليهم: ${count}**`)]})
                  }).catch((err) => {
                    return;
                  })
                })
            }
        })}
    }