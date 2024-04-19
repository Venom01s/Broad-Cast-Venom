const { EmbedBuilder } = require("discord.js")
module.exports = async( Client, Interaction ) => {
        const Prefix = Client.Prefix
    if (Interaction.isButton()) {
        if (Interaction.customId === 'Owner') {
            const Embed = new EmbedBuilder()
            .setAuthor({ name: Interaction.user.username, iconURL: Interaction.user.displayAvatarURL()})
            .setColor('Random').setFields(
                soon
            )
            .setThumbnail(Interaction.user.displayAvatarURL()).setTimestamp().setTitle('Owner Commands')
            Interaction.reply({ embeds: [Embed], ephemeral: true})
        } else if (Interaction.customId === 'Admin') {
            const Embed = new EmbedBuilder()
            .setAuthor({ name: Interaction.user.username, iconURL: Interaction.user.displayAvatarURL()})
            .setColor('Random').setFields(
                { name: `${Prefix}bc-online`, value: 'ارسال لكل من هم اونلاين في السيرفر' },
                { name: `${Prefix}bc-all`, value: 'ارسال لكل من هو داخل السيرفر اونلاين وافلاين' },
                { name: `${Prefix}bc-role`, value: 'ارسال كل ما هم يمتلكون رتبه معينه' },
            )
            .setThumbnail(Interaction.user.displayAvatarURL()).setTimestamp().setTitle('Administretor Commands')
            Interaction.reply({ embeds: [Embed], ephemeral: true})
        }
    }
}