const config = require('./config.json');

let chart = {
    "chart": {
        "type": "line",
        "data": {
            "labels": [],
            "datasets": [{
                "label": `${config.youtuber}'s Subscriber Count for the Last 7 Days`,
                "backgroundColor": 'rgba(255, 99, 132, 0.25)',
                "borderColor": 'rgb(255, 99, 132)',
                "data": [427, 427, 437, 440, 460, 462, 464]
            }]
        },
        "options": {
            "legend": {
                "labels": {
                    "fontColor": '#fff',
                }
            },
            "scales": {
                "xAxes": [{
                    "ticks": {
                        "fontColor": '#fff'
                    }
                }],
                "yAxes": [{
                    "ticks": {
                        "beginAtZero": true,
                        "fontColor": '#fff'
                    },
                    "gridLines": {
                        "color": '#aaa'
                    }
                }]
            },
            "plugins": {
                "backgroundImageUrl": config.chartBackground,
            }
        }
    },
}

module.exports = {chart}