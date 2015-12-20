//  http://api.icndb.com/jokes/random
var jokeOfTheDay=[];
function joke() {
    jokeOfTheDay[0] = jokeOfTheDay[1];
    jokeModule.getJoke(getJokeMiddleman);
    return jokeOfTheDay[0];
}
function getJokeMiddleman(data) {
    jokeOfTheDay[0] = jokeOfTheDay[1];
    jokeOfTheDay[1] = data["value"].joke;
    console.log("call");
}
function loadApis(){
    jokeModule.getJoke(storeJoke);
}
function storeJoke(data) {
    jokeOfTheDay[0] = "";
    console.log(data["value"].joke);
    jokeOfTheDay[1] = data["value"].joke;
    console.log("h "+jokeOfTheDay[1]);
}
var jokeModule = (function () {
    return {
        getJoke: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://api.icndb.com/jokes/random",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        }
    };
}());

var city;
function weather(input) {
    city = input.toLowerCase();
    weatherModule.getWeather(displayWeather);
}
var weatherModule = (function () {
    return {
        getWeather: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };
}());
function displayWeather(data) {
    body += "<p><span class='highlight root'>root$</span>" + document.getElementById("userInput").innerHTML + "</p>";
    body += "<div>" + data["name"] + "</div><div>" + data.weather[0].description + " | Feels like " + toCelsius(data["main"].temp) + " &deg;C</div>";
    body += "<div>-----------------------------</div>";
    body += "<div>Minimum temperature: " + toCelsius(data["main"].temp_min) + " &deg;C</div><divp>Maximum temperature: " + toCelsius(data["main"].temp_max) + " &deg;C</div><div>Humidity: " + data["main"].humidity + "%</div><div>Windspeed: " + toKmsPerHr(data["wind"].speed) + " Km/hr </div><div>Sunrise: " + toReadableTime(data["sys"].sunrise) + "</div><div>Sunset: " + toReadableTime(data["sys"].sunset) + "</div><br/>";
    loadTerminalWindowText();
}
function toCelsius(faren) {
    return ((faren-32)*(5/9)).toFixed(2);
}
function toKmsPerHr(milesPerHr) {
    return (milesPerHr*1.60934).toFixed(2);
}
function toReadableTime(weirdTime) {
    var d = new Date(weirdTime * 1000);
    return d;
}