function temperature(posShow, degree, posi, coun, stat1, stat2) {

    var degrees = degree;
    var city = posi;
    var country = coun;
    var state = stat1 + ', ' + stat2;
    var weather;

    var result = "";

    result = `
            <div id="Temperature" class="container-fluid">
                <div class="row">
                    <div class="col-12 my-4">
                        <div class="card p-3 mb-2">
                            <div class="row">
                                <div class="col-6">
                                    <h3 class="m-0">Temperature</h3>
                                </div>
                                <div class="col-6">
                                    <form action="" class="form-group d-flex">
                                        <input type="text" id="txtWeatherCity" class="form-control ms-auto w-75"
                                            placeholder="Input City ...">
                                        <button id="weatherCity" class="btn btn-primary">Search</button>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="row my-4 weather-box">
                                        <div class="col-6">
                                            <div class="card text-center p-3 h-100 img"
                                                    style="background-image: url('');">
                                                <div class="temperature">
                                                    <p class="degrees p-0">${degrees}</p>
                                                </div>
                                                <div class="position">
                                                    <span class="city">${city}</span>, <span
                                                            class="country">${country}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        <div class="col-6">
                                            <div class="card text-center p-3 h-100">
                                                <div class="weather"><i class="fas fa-cloud-rain"></i></div>
                                                <div class="state">${state}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    posShow.innerHTML = result;

    document.getElementById("weatherCity").onclick = (event) => {
        event.preventDefault();

        var weatCity = document.getElementById("txtWeatherCity").value;
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + weatCity + '&appid=03dcb7ad7cd50e44b53719bdc18399bd';

        var degrees = document.querySelector('.degrees');
        var city = document.querySelector('.city');
        var country = document.querySelector('.country');
        var state = document.querySelector('.state');
        var weather;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let degree = parseInt(data.main.temp - 273.15);
                let posi = data.name;
                let coun = data.sys.country;
                let stat1 = data.weather[0].main;
                let stat2 = data.weather[0].description;

                degrees.innerHTML = degree;
                city.innerHTML = posi;
                country.innerHTML = coun;
                state.innerHTML = stat1 + ', ' + stat2;
            });
    }
}

export default temperature;