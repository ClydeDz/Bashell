﻿/* scripted by Clyde D'Souza */
var myDate = new Date();
function generalOutput(input) {
    /* output code in 4 other places one for each api in api.js. changes made here must be made there also */
    body += "<div class='input-container'><span class='highlight root'>root$</span>" + document.getElementById("userInput").innerHTML + "</div>";
    body += "<div>" + input + "</div><br/>";
    loadTerminalWindowText();
}
function clearScreen() {
    body = "";
    loadTerminalWindowText();
}
function help() {
    var helpText = "<p>Help Section<br/>-------------<br/>Below are the list of commands and its description.</p>";
    for (var i = 0; i < helpSet.length; i++) {
        helpText += "<p>[" + (i + 1) + "] " + helpSet[i].command + " " + helpSet[i].args + "<br/>Description: " + helpSet[i].description + "</p>";
    }
    generalOutput(helpText);
}
function dateTime() {
    generalOutput("Today is "+myDate.toString());
}
function date() {
    var month=myDate.getMonth() + 1;
    generalOutput(myDate.getDate() + "/" + month+ "/" + myDate.getFullYear());
}
function time() {
    generalOutput("Time is "+myDate.getHours() + ":" + myDate.getMinutes());
}
function emoji(input) {
    var emoticon;
    switch (input) {
        case "happy":
            emoticon= ":)";
            break;
        case "sad":
            emoticon= ":(";
            break;
        case "angry":
            emoticon= ":@";
            break;
        case "cry":
            emoticon= ":'(";
            break;
        case "smart":
            emoticon= ";)";
            break;
        case "excited":
            emoticon= "*_*";
            break;
        case "love":
            emoticon= ":*";
            break;
        case "lost":
            emoticon= "X_X";
            break;
        case "surprise":
            emoticon= ":O";
            break;
        default:
            emoticon= "Emoji not found X_x";
            break;
    }
    generalOutput(emoticon);
}
function christmas() {
    var xmas = "Merry Christmas ^_^<br/>";
    for (var i = 1; i <= 5; i++) {
        for (var j = 5; j >= 1; j--) {
            if (j == i) {
                for (var k = 1; k <= i; k++) {
                    xmas += "*&nbsp;";
                }
            }
            else {
                xmas += "&nbsp;";
            }
        }
        xmas += "<br/>";
    }
    generalOutput(xmas);
}
function bashell() {
    var text = "<div>Bashell Terminal window [Version: f808c8f]</div>";
    text += "<div>Clyde D'Souza [<a href='http://goo.gl/8yXVaA' class='console-link'>http://goo.gl/8yXVaA</a>]</div>";
    text += "<div>Thank you for using Bashell</div>";
    generalOutput(text);
}
