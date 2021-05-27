import { toggle, darkmode } from './actions/action.js';

import dashboard from './modules/dashboard.js';
import table from './modules/table.js';
import { chart_week, chart_month, chart_year } from './modules/chart.js';
import { show_Chart_Month, show_Chart_Week } from './chart/chart-set.js';
import temperature from './modules/temperature.js';


var content = document.getElementById("content");
dashboard(content);
darkmode();

document.getElementById("SidebarToggle").onclick = (event) => {
    event.preventDefault();
    toggle();
}
document.getElementById("dashboard").onclick = (event) => {
    event.preventDefault();
    dashboard(content);
}
document.getElementById("table").onclick = (event) => {
    event.preventDefault();
    table(content);
}
document.getElementById("chart-week").onclick = (event) => {
    event.preventDefault();
    chart_week(content);
    show_Chart_Week();
}
document.getElementById("chart-month").onclick = (event) => {
    event.preventDefault();
    chart_month(content);
    show_Chart_Month();
}
document.getElementById("chart-year").onclick = (event) => {
    event.preventDefault();
    chart_year(content);
}
document.getElementById("temperature").onclick = (event) => {
    event.preventDefault();

    fetch('http://api.openweathermap.org/data/2.5/weather?q=nha%20trang&appid=03dcb7ad7cd50e44b53719bdc18399bd')
        .then(response => response.json())
        .then(data => {
            let degree = parseInt(data.main.temp - 273.15);
            let posi = data.name;
            let coun = data.sys.country;
            let stat1 = data.weather[0].main;
            let stat2 = data.weather[0].description;

            temperature(content, degree, posi, coun, stat1, stat2);
        });
}