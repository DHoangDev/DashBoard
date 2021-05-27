function dashboard(posShow) {

    var arrayRevenue = ['24.534', '3.278', '1.435', '78.123'];
    const arrayFields = ['Sales', 'Marketing', 'Reports', 'Access']; // Mang Linh Vuc Kinh Doanh

    var result = "";

    result = `
        <div id="Dashboard" class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="row my-4">
                        <div class="col-6">
                            <h3 class="m-0">Dash Board</h3>
                        </div>
                        <div class="col-6 text-end">
                            <button type="button" class="btn btn-primary btn-report"><i
                                    class="fas fa-download"></i>
                                Generate Report</button>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card card-1 p-3 mb-2">
                                <div class="card-tilte">
                                    <h5><b>${arrayFields[0]}</b></h5>
                                </div>
                                <div class="card-content">
                                    <p class="num">${arrayRevenue[0]}</p>
                                    <div><span><i class="fas fa-cloud-download-alt"></i></span>
                                        <span class="num-turns">364</span>
                                        <span class="time">Since Last Week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card card-2 p-3 mb-2">
                                <div class="card-tilte">
                                    <h5><b>${arrayFields[1]}</b></h5>
                                </div>
                                <div class="card-content">
                                    <p class="num">${arrayRevenue[1]}</p>
                                    <div><span><i class="fas fa-cloud-download-alt"></i></span>
                                        <span class="num-turns">364</span>
                                        <span class="time">Since Last Week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card card-3 p-3 mb-2">
                                <div class="card-tilte">
                                    <h5><b>${arrayFields[2]}</b></h5>
                                </div>
                                <div class="card-content">
                                    <p class="num">${arrayRevenue[2]}</p>
                                    <div>
                                        <span><i class="fas fa-cloud-download-alt"></i></span>
                                        <span class="num-turns">364</span>
                                        <span class="time">Since Last Week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card card-4 p-3 mb-2">
                                <div class="card-tilte">
                                    <h5><b>${arrayFields[3]}</b></h5>
                                </div>
                                <div class="card-content">
                                    <p class="num">${arrayRevenue[3]}</p>
                                    <div>
                                        <span><i class="fas fa-cloud-download-alt"></i></span>
                                        <span class="num-turns">364</span>
                                        <span class="time">Since Last Week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">

                </div>
            </div>
        </div>
    `;

    posShow.innerHTML = result;
}

export default dashboard;