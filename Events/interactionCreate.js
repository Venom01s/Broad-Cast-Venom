"use strict";
module.exports = async(Client, Interaction) => {
    Client.emit('Help_Button', (Client, Interaction))
    Client.emit('Status_Button', (Client, Interaction))
    Client.emit('Dashboard_Buttons', (Client, Interaction))

    if(Interaction.isChatInputCommand()) {
        const Cmd = Client.Çʍɗ.get(Interaction.commandName);
        if(!Cmd) return;
        try {
            Cmd.run(Client, Interaction)
        } catch(Err) {
            console.log(Err)
        }
    } 
}