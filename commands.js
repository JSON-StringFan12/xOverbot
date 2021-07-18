const discord = require('discord.js')
const request = require('request');

let date = new Date()

const config = require('./config.json')
let main = require('./main');
let util = require('./utilities')
let chart = require('./chart').chart;

const colors = ['#44008b', '#9f45b0', '#e54ed0', '#ffe4f2', '#00076f']


const commands = [
    [
        ['help', 'h'],
        'Help:',
        'Displays the help command.',
        function(message, baseEmbed) {
            let embed = new discord.MessageEmbed();
            embed = baseEmbed;
            embed.setThumbnail('https://yt3.ggpht.com/g3C2S6YUOgCe-TePr55KlSNwR6HFVRSvYQ0Iy4Xy8xx_ASaPa_LLD7MWUNawY9M581xZErHydg=s176-c-k-c0x00ffffff-no-rj')
            embed.setTitle('Commands List:');
            for (let i = 0; i < commands.length; i++) {
                embed.addField(commands[i][1], `(${config.prefix}${commands[i][0][0]} or ${config.prefix}${commands[i][0][1]}) ${commands[i][2]}`);
            }
            let newMessage = message.channel.send(embed).then(newMessage => {
                let i = 0;
                let j = 0
                let Interval1 = setInterval(() => {
                    j++
                    if (j > colors.length) {
                        j = 0;
                    }
                    embed.setColor(colors[j]);
                    newMessage.edit(embed);
                    i++
                    if (i > 10) {
                        embed.setFooter('The rainbow cycle was stopped due to the automatic built-in ratelimit.');
                        newMessage.edit(embed);
                        clearInterval(Interval1)
                        return;
                    }
                }, 1500)
            })
        }
    ],
    [
        ['subscribers', 'subs'],
        'Subscribers:',
        'Checks the amount of subscribers xOvernight has.',
        function(message, baseEmbed) {
            let embed = new discord.MessageEmbed();
            embed = baseEmbed;
            embed.setTitle('Subscribers:');
            util.subCount();
            let basicMessage = `xOvernight currently has ${util.data.subs} subscribers.\nHe has gained ${util.data.subGain} subscribers since this command was last used.`
            embed.setDescription(basicMessage + '\nGathering Graph...')
            for (let i = -5; i <= 1; i++) {
                if (date.getDay() + i + 7 > 0) {
                    chart.chart.data.labels[i + 5] = `${JSON.stringify(date.getMonth() + 1)}/${JSON.stringify(date.getDay() + i + 17)}/${JSON.stringify(date.getFullYear())}`
                } else {
                    chart.chart.data.labels[i + 5] = `${JSON.stringify(date.getMonth())}/${JSON.stringify(34 + i)}/${JSON.stringify(date.getFullYear())}`
                }
            }
            console.log(chart.chart.data.datasets[0].data)
            chart.chart.data.datasets[0].data[6] = util.data.subs;
            request({
                url: 'https://quickchart.io/chart/create',
                method: 'POST',
                json: true,
                body: chart
            }, (error, response, text) => {
                embed.setImage(text.url);
                embed.setDescription(basicMessage)
            })
            let newMessage = message.channel.send(embed).then(newMessage => {
                let i = 0;
                let j = 0
                let Interval2 = setInterval(() => {
                    j++
                    if (j > colors.length) {
                        j = 0;
                    }
                    embed.setColor(colors[j]);
                    newMessage.edit(embed);
                    i++
                    if (i > 5) {
                        embed.setFooter('The rainbow cycle was stopped due to the automatic built-in ratelimit.');
                        newMessage.edit(embed);
                        clearInterval(Interval2)
                        return;
                    }
                }, 1500)
            })
        }
    ],
    [
        ['viewcount', 'views'],
        'View Count:',
        "Shows xOvernight's video views and how many videos he has.",
        async function(message, baseEmbed) {
            let embed = new discord.MessageEmbed();
            embed = baseEmbed;
            embed.setThumbnail('https://yt3.ggpht.com/g3C2S6YUOgCe-TePr55KlSNwR6HFVRSvYQ0Iy4Xy8xx_ASaPa_LLD7MWUNawY9M581xZErHydg=s176-c-k-c0x00ffffff-no-rj')
            embed.setTitle('Video Statistics:');
            await util.subCount();
            embed.setDescription(`xOvernight has ${util.data.viewCount} views spread across ${util.data.videoCount} videos.`)
            let newMessage = message.channel.send(embed).then(newMessage => {
                let i = 0;
                let j = 0
                let Interval3 = setInterval(() => {
                    j++
                    if (j > colors.length) {
                        j = 0;
                    }
                    embed.setColor(colors[j]);
                    newMessage.edit(embed);
                    i++
                    if (i > 5) {
                        embed.setFooter('The rainbow cycle was stopped due to the automatic built-in ratelimit.');
                        newMessage.edit(embed);
                        clearInterval(Interval3)
                        return;
                    }
                }, 3000)
            })
        }
    ],
    [
        ['channelgrowth', 'growth'],
        'Channel Growth:',
        "Shows xOvernight's estimated subscriber count growth in certain time periods.",
        function(message, baseEmbed) {
            let embed = new discord.MessageEmbed();
            embed = baseEmbed;
            embed.setThumbnail('https://yt3.ggpht.com/g3C2S6YUOgCe-TePr55KlSNwR6HFVRSvYQ0Iy4Xy8xx_ASaPa_LLD7MWUNawY9M581xZErHydg=s176-c-k-c0x00ffffff-no-rj')
            embed.setTitle('Estimated Sub Growth:');
            util.subCount();
            let week = (parseInt(util.data.subs) - chart.chart.data.datasets[0].data[0]) + parseInt(util.data.subs);
            let month = Math.floor((week - parseInt(util.data.subs)) / 7 * 30)
            let year = (week - parseInt(util.data.subs)) * 52

            embed.setDescription('xOvernight will (probably) grow to:');
            embed.addField(`${week} subscribers`, 'In one week.');
            embed.addField(`${month} subscribers`, 'In one month.');
            embed.addField(`${year} subscribers`, 'In one year.');
            let newMessage = message.channel.send(embed).then(newMessage => {
                let i = 0;
                let j = 0
                let Interval3 = setInterval(() => {
                    j++
                    if (j > colors.length) {
                        j = 0;
                    }
                    embed.setColor(colors[j]);
                    newMessage.edit(embed);
                    i++
                    if (i > 5) {
                        embed.setFooter('The rainbow cycle was stopped due to the automatic built-in ratelimit.');
                        newMessage.edit(embed);
                        clearInterval(Interval3)
                        return;
                    }
                }, 3000)
            })
        }
    ],
    [
        ['latestvideo', 'latest'],
        'Latest Video:',
        "Shows xOvernight's most recent video that he uploaded.",
        function(message, baseEmbed) {
            let embed = new discord.MessageEmbed();
            embed = baseEmbed;
            util.videos()
            console.log(util.newestVideo.title)
            embed.setTitle(`xOvernight's most recent video: ${util.newestVideo.title}`);
            embed.setURL(`https://www.youtube.com/watch?v=${util.newestVideo.id}`);
            embed.setDescription(`**Description:** ${util.newestVideo.description}`);
            embed.setImage(util.newestVideo.thumbnail)

            let newMessage = message.channel.send(embed).then(newMessage => {
                let i = 0;
                let j = 0
                let Interval4 = setInterval(() => {
                    j++
                    if (j > colors.length) {
                        j = 0;
                    }
                    embed.setColor(colors[j]);
                    newMessage.edit(embed);
                    i++
                    if (i > 5) {
                        embed.setFooter('The rainbow cycle was stopped due to the automatic built-in ratelimit.');
                        newMessage.edit(embed);
                        clearInterval(Interval4)
                        return;
                    }
                }, 3000)
            })
        }
    ]
]

module.exports = {
    commands,
    date,
}