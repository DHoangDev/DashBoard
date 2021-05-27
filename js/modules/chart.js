function chart_week(posShow) {

    var result = "";

    result = `
        <div id="Chart-week" class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="row my-4">
                        <div class="col-6">
                            <h3 class="m-0">Chart Of Week</h3>
                        </div>
                        <div class="col-6">
                            <select class="form-select ms-auto w-50" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-6">
                            <div class="card p-3 mb-2">
                                <div class="card-title">
                                    <h3 class="m-0">Line Chart</h3>
                                </div>
                                <div class="card-content">
                                    <canvas id="myLineChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card p-3 mb-2">
                                <div class="card-title">
                                    <h3 class="m-0">Bar Chart</h3>
                                </div>
                                <div class="card-content">
                                    <canvas id="myBarChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    posShow.innerHTML = result;
}
function chart_month(posShow) {

    var result = "";

    result = `
        <div id="Chart-month" class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="row my-4">
                        <div class="col-6">
                            <h3 class="m-0">Chart Of Month</h3>
                        </div>
                        <div class="col-6">
                            <select class="form-select ms-auto w-50" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-6">
                            <div class="card p-3 mb-2">
                                <div class="card-title">
                                    <h3 class="m-0">Doughnut Chart</h3>
                                </div>
                                <div class="card-content">
                                    <canvas id="myDoughnutChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card p-3 mb-2">
                                <div class="card-title">
                                    <h3 class="m-0">Radar Chart</h3>
                                </div>
                                <div class="card-content">
                                    <canvas id="myRadarChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    posShow.innerHTML = result;
}
function chart_year(posShow) {

    var result = "";

    result = `
        <div id="Chart-year" class="container-fluid">
            this is Chart of Year
        </div>
    `;

    posShow.innerHTML = result;
}

export { chart_week, chart_month, chart_year };