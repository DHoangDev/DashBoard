function show_Chart_Week() {
    var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(44, 215, 20, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(44, 215, 20, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    const config_line = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    position: "right",
                    align: "start",
                }
            },
            aspectRatio: 2,
        }
    };
    const config_bar = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    position: "right",
                    align: "start",
                }
            },
            aspectRatio: 2,
        }
    };
    var myChart = new Chart(
        document.getElementById('myLineChart'),
        config_line
    );
    var myChart = new Chart(
        document.getElementById('myBarChart'),
        config_bar
    );
}
function show_Chart_Month() {
    var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(44, 215, 20, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(44, 215, 20, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    const config_doughnut = {
        type: 'doughnut',
        data: data,
        options: {
            cutout: 75,
            plugins: {
                legend: {
                    position: "right",
                    align: "start",
                }
            },
            aspectRatio: 2,
        }
    };
    const config_radar = {
        type: 'radar',
        data: data,
        options: {
            plugins: {
                legend: {
                    position: "right",
                    align: "start",
                }
            },
            aspectRatio: 2,
        }
    };
    var myChart = new Chart(
        document.getElementById('myDoughnutChart'),
        config_doughnut
    );
    var myChart = new Chart(
        document.getElementById('myRadarChart'),
        config_radar
    );
}

export { show_Chart_Month, show_Chart_Week };