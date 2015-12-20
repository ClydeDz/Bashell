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

function startWeather() {
    feedbackModule.getfeedback(displayWeather);
}
var feedbackModule = (function () {

    // Return anything that you want to expose outside the closure
    return {
        getfeedback: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://api.openweathermap.org/data/2.5/weather?q=india&appid=2de143494c0b295cca9337e1e96b00e0",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        }
    };
}());
function displayWeather(data) {
    //console.log(data[0].main);
    body += "<p>root$ " + document.getElementById("userInput").innerHTML + "</p>";
    body += "<p>Humidity " + data["main"].humidity + "</p><br/>";
    loadTerminalWindowText();
}