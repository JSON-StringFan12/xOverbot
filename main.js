const discord = require('discord.js')
const bot = new discord.Client()

const fs = require('fs')

let date = new Date()
let day = date.getDay()

const config = require('./config.json')

let commands = require('./commands').commands
let util = require('./utilities')

const request = require('request');
const channelId = config.channelId;

bot.on('message', message => {
    let newDate = new Date()
    if (day != date.getDay()) {
        subCount()
        chart.chart.data.datasets.data.splice(0, 1)
        chart.chart.data.datasets.data[6] = subs
        day = date.getDay()
    }
    console.log(util.subs)

    if (message.author.id != '667510990304313367') {
        for (let i = 0; i < commands.length; i++) {
            console.log(i);
            for (let j = 0; j < commands[i][0].length; j++) {
                if (message.content.substr(0, commands[i][0][j].length + config.prefix.length) == config.prefix + commands[i][0][j]) {
                    let baseEmbed = new discord.MessageEmbed()
                    baseEmbed
                        .setColor('#ffe4f2')
                        .setTimestamp()
                        .setFooter('Created by JSON_String#7411.')
                        .setAuthor(`Click here to go to ${config.youtuber}'s channel.`,
                            `attachment://${config.secondaryPhoto}`,
                            `https://www.youtube.com/channel/${channelId}`)
                    commands[i][3](message, baseEmbed)
                    return
                }
            }
        }
    }
})

bot.on('ready', () => {
    bot.user.setPresence({
        status: "online",
        activity: {
            name: `${config.youtuber} on YT!`,
            type: "WATCHING"
        }
    })
})

util.subCount()
util.videos()
bot.login(config.token);