'use strict'

const data_json = {
    labels: ["Porter Robinson", "Post Malone", "Taylor Swift", "keshi", "Lauv"],
    datasets: [
        {
            labels: "Spotify monthly listeners (millions)",
            backgroundColor: ["#FF003F", "#191970", "#00B140", "#FFD700", "8B008B"],
            data: [2.3, 59.7, 85.1, 13.6, 18.2]
        }
    ]
};

const doughnut = {
    type: 'doughnut',
    data: data_json,
    options: {
        title: {
            display: true,
            text: 'Spotify monthly listeners chart (millions)'
        }
    }
}

const horizontal_bar = {
    type: 'bar',
    data: data_json,
    options: {
        title: {
            display: true,
            text: 'Spotify monthly listeners chart (millions)'
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new Chart(document.getElementById("doughnut--chart").getContext('2d'), doughnut)
    new Chart(document.getElementById('horizontal--chart').getContext('2d'), horizontal_bar)
});