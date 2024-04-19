"use strict";
const fs = require('fs')

module.exports = async Client => {
    fs.readdir(`${process.cwd()}/Events/`, async (Err, Files) => {
        Files.forEach(async Events => {
            const EventsFind = require(`${process.cwd()}/Events/${Events}`)
            const Event = Events.split('.')[0]
            Client.on(Event, EventsFind.bind(null, Client))
        })
    })
}