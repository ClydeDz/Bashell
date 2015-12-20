var myDate = new Date();
function help() {
    var helpText = "<p>Help Section<br/>---------------------------------------------<br/>Below are the list of commands and its description.</p>";
    for (var i = 0; i < helpSet.length; i++) {
        helpText += "<p>" + (i + 1) + ". Command: " + helpSet[i].command + " " + helpSet[i].args + "<br/>&nbsp;&nbsp;&nbsp;Description: " + helpSet[i].description + "</p>";
    }
    return helpText;
}
function dateTime() {
    return myDate.toString();
}
function date() {
    return myDate.getDate() + "/" + myDate.getMonth() + "/" + myDate.getFullYear();
}
function time() {
    return myDate.getHours()+":"+myDate.getMinutes();
}
function emoji(input) {
    switch (input) {
        case "happy":
            return ":)";
            break;
        case "sad":
            return ":(";
            break;
        case "angry":
            return ":@";
            break;
        case "cry":
            return ":'(";
            break;
        case "smart":
            return ";)";
            break;
        case "excited":
            return "*_*";
            break;
        case "love":
            return ":*";
            break;
        case "lost":
            return "X_X";
            break;
        case "surprise":
            return ":O";
            break;
        default:
            return "Emoji not found X_x";
            break;
    }
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
    return xmas;
}