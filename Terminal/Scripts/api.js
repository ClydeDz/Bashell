/* scripted by Clyde D'Souza */
//  http://api.icndb.com/jokes/random
var jokeOfTheDay=[];
function joke() {
    try{
        jokeModule.getJoke(displayJoke);
    }
    catch (err) {
        errorText();
    }
}
function displayJoke(data) {
    generalOutput(data["value"].joke);
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

/* API for weather */
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
    body += "<div class='input-container'><span class='highlight root'>root$</span>" + document.getElementById("userInput").innerHTML + "</div>";
    body += "<div>" + data["name"] + "</div><div>" + data.weather[0].description + " | Feels like " + toCelsius(data["main"].temp) + " &deg;C</div>";
    body += "<div>-----------------------------</div>";
    body += "<div>Minimum temperature: " + toCelsius(data["main"].temp_min) + " &deg;C</div><div>Maximum temperature: " + toCelsius(data["main"].temp_max) + " &deg;C</div><div>Humidity: " + data["main"].humidity + "%</div><div>Windspeed: " + toKmsPerHr(data["wind"].speed) + " Km/hr </div><div>Sunrise: " + toReadableTime(data["sys"].sunrise) + "</div><div>Sunset: " + toReadableTime(data["sys"].sunset) + "</div><br/>";
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
/* API for word definition */
var word;
function defineWord(input) {
    word = input;
    wordModule.getDefinition(displayWordDefinition);
}
function displayWordDefinition(data) {
    body += "<div class='input-container'><span class='highlight root'>root$</span>" + document.getElementById("userInput").innerHTML + "</div>";
    body += "<div>" + data[0].word.toUpperCase() + " (" + data[0].partOfSpeech + "):</div>";
    body += "<div>"+data[0].text+"</div><br/>";
    loadTerminalWindowText();
}
var wordModule = (function () {
    return {
        getDefinition: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://api.wordnik.com/v4/word.json/"+word+"/definitions?limit=10&includeRelated=true&sourceDictionaries=wiktionary&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };
}());

/* API for random users */
function randomUsers() {
    usersModule.getUsers(getRandomUsers);
}
function getRandomUsers(data) {
    body += "<div class='input-container'><span class='highlight root'>root$</span>" + document.getElementById("userInput").innerHTML + "</div>";
    body += "<div>Name: <span class='profile-command'>" + data.results[0].user["name"].first + " " + data.results[0].user["name"].last + "</span></div>";
    body += "<div>Gender: <span class='profile-command'>"+data.results[0].user["gender"]+"</span></div><br/>";
    loadTerminalWindowText();
}
var usersModule = (function () {
    return {
        getUsers: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://randomuser.me/api/",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };
}());

/* API for country information */
var country=""; var dual = "";
function countryInfo() {
    var input = document.getElementById("userInput").innerHTML.split(" ");
    country = "";
    for (var i = 1; i < input.length;i++){
        country += input[i].toString().toLowerCase()+" ";
    }
    country = country.trim();
    countryModule.getCountryInfo(displayCountryInfo);
}
function displayCountryInfo(data) {
    console.log(data[0].name + "2" + data[0].capital);
    body += "<div class='input-container'><span class='highlight root'>root$</span>" + document.getElementById("userInput").innerHTML + "</div>";
    body += "<div>" + data[0].name + "</div>";
    body += "<div>Capital: " + data[0].capital + "</div><div>Region: " + data[0].region + "</div><div>Population: " + data[0].population + "</div><div>Currency: " + data[0].currencies[0] + "</div><br/>";
    loadTerminalWindowText();
}
var countryModule = (function () {
    return {
        getCountryInfo: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://restcountries.eu/rest/v1/name/"+country+"?fullText=true",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };
}());

/* money https://openexchangerates.org/api/currencies.json what each currency code is called */
/* currency rates base USD http://api.fixer.io/latest?base=USD */

/* api for uv index http://api.owm.io/air/1.0/uvi/current?lat=51.51&lon=-0.13&from=1446465600&to=1446595200&appid=2de143494c0b295cca9337e1e96b00e0 */
/* auckland http://api.owm.io/air/1.0/uvi/current?lat=-36.87&lon=174.77&from=1446465600&to=1446595200&appid=2de143494c0b295cca9337e1e96b00e0 */
/* also works http://api.owm.io/air/1.0/uvi/current?lat=-36.87&lon=174.77&appid=2de143494c0b295cca9337e1e96b00e0 */
/**/