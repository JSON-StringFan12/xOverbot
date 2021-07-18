let chart = {
    "chart": {
        "type": "line",
        "data": {
            "labels": [],
            "datasets": [{
                "label": "xOvernight's Subscriber Count for the Last 7 Days",
                "backgroundColor": 'rgba(255, 99, 132, 0.25)',
                "borderColor": 'rgb(255, 99, 132)',
                "data": [205, 216, 239, 251, 276, 309, 276]
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
                "backgroundImageUrl": 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg',
            }
        }
    },
}

module.exports = {chart}