const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    name: 'help',
    cooldown: 10,




    run: async( Client, Message ) => {
    const Embed = new EmbedBuilder()
    .setAuthor({ name: Message.author.username, iconURL: Message.author.displayAvatarURL()})
    .setColor('Random').setDescription(`**مرحبا بك شرح الازرار اللتي بالاسفل

    Owner: هي الاوامر الخاصه بصاحب البوت
    
    Admin : هي الاوامر الخاصه بالادمنيه 
    
    \nWelcome to the explanation of the buttons below

    Owner: These are the commands for the owner of the bot
    
    Admin: These are the commands for the administrator**`)
    .setFooter({ text: Message.author.username, iconURL: Message.author.displayAvatarURL()})
    .setThumbnail(Message.author.displayAvatarURL()).setTitle('Broadcast Command')
    const Row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder().setCustomId('Admin').setLabel('Admin').setStyle(ButtonStyle.Primary).setEmoji('📃'))
   Message.reply({ embeds: [Embed], components: [Row]})
    }
}