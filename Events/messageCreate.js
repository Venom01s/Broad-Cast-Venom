"use strict";
/**
 * @param { import('discord.js').Client } Client
 * @param { import('discord.js').Message } Message
 */
const { Collection } = require('discord.js');
const Timeout = new Collection()
const ms = require('ms')
module.exports = async(Client, Message) => {
    const Prefix = Client.Prefix
    if(!Message.content.startsWith(Prefix) || Message.author.bot) return;
    const Args = Message.content.slice(Prefix.length).trim().split(/ +/)
    const Command = Args.shift().toLowerCase()
    const Cmds = await Client.Çɱɗ.get(Command) || await Client.Çɱɗ.find((Cmd) => Cmd.aliases && Cmd.aliases.includes(Command))
    if(!Cmds) return;
    try {
        if(Cmds.cooldown) {
            if(Timeout.has(`${Cmds.name}-${Message.author.id}`)) return Message.reply({ content: `**${Message.author.username}**, Cool down (**${ms(Timeout.get(`${Cmds.name}-${Message.author.id}`) - Date.now(), { long: true }).includes('ms') ? '0 seconds' : ms(Timeout.get(`${Cmds.name}-${Message.author.id}`) - Date.now(), { long: true })}** left)`, allowedMentions: { repliedUser: false } }).then((Msg) => {
                setTimeout(() => {
                    Msg.delete()
                    Message.delete()
                }, 900)
            })
            Cmds.run(Client, Message, Args)
            Timeout.set(`${Cmds.name}-${Message.author.id}`, Date.now() + (Cmds.cooldown * 1000))
            setTimeout(() => {
                Timeout.delete(`${Cmds.name}-${Message.author.id}`)
            }, Cmds.cooldown * 1000)
        } else {
            Cmds.run(Client, Message, Args)
        }
    } catch(Err) {
        console.log(Err)
    }
}