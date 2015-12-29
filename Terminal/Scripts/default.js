// docs: global variables
var headingText = "<p>Bashell - The Terminal Window by Clyde D'Souza<br/>Type <span class='highlight'>help</span> to view the list of available commands and its description.</p>";
var body="";
var flashText = "<p><span class='highlight root'>root$</span><span id='userInput'></span><span class='cursor blink'></span></p><div id='Typeahead' class='typeahead-container'><div id='TypeaheadText' class='typeahead-container'></div></div><div class='space'></div>";

// docs: listens constantly for a keyboard input from the user
function listenAndWrite(event) {
    var x = event.which || event.keyCode;
    if (x == 8) {
        event.preventDefault();
        deleteText();
    }
    else if (x == 37 || x == 38 || x == 39 || x == 40) {
        //event.preventDefault();
        arrowKeys(x);
    }
    else if (x == 96 || x == 91 || x == 93 || x == 59 || x == 39 || x == 44 || x == 46 || x == 47) {
        symbolsKey();
    }
    else if (x == 42|| x == 43 || x == 45 || x == 47) {
        arithmeticKeys();
    }
    else if (x == 33) {
        pageUpKey();
    }
    else if (x == 34) {
        pageDownKey();
    }
    else if (x == 27) {
        escapeKey();
    }
    else if (x == 13) {
        enterKey();
    }
    else if (x >= 112 && x <= 123) {
        functionKeys();
    }
    //else if (x == 32) {
    //    document.getElementById("userInput").innerHTML += "&nbsp;";
    //}
    else {
        //document.getElementById("userInput").innerHTML += "" + x.toString();
        document.getElementById("userInput").innerHTML += "" + String.fromCharCode(x).toString().toLowerCase();
        predictText(document.getElementById("userInput").innerHTML);
    }    
}

// docs: performs the backspace button functionality
function deleteText() {
    document.getElementById("userInput").innerHTML = document.getElementById("userInput").innerHTML.substring(0, document.getElementById("userInput").innerHTML.length - 1);
    predictText(document.getElementById("userInput").innerHTML);
}
function enterKey() {
    if (predictiveTextFlag == 1) {
        completePredictiveText(document.getElementById("Predictive_" + activeFlag).innerHTML);
    }
    else {
        executeCommand();
    }
}
// docs: executes commands that the user has typed in the terminal
function executeCommand() {
    var input = document.getElementById("userInput").innerHTML;
    demystify(input.toLowerCase());
}
function arithmeticKeys() {
}
function pageDownKey() {
    $(".terminal-window").animate({ scrollTop: $('#TerminalWindow').height() }, "slow");
}
function functionKeys() {
}
function pageUpKey() {
    $(".terminal-window").animate({ scrollTop: 0 }, "slow");
}
function escapeKey() {
    document.getElementById("Typeahead").style.display = "none";
    predictiveTextFlag =0;
}
function symbolsKey() {
}
function arrowKeys(input) {
    if (predictiveTextFlag == 1) {
        if (input == 38) {
            arrowUp();
        }
        else if (input == 40) {
            arrowDown();
        }
    }
}
function loadBody() {
    loadTerminalWindowText();
}
// docs: loads text in the terminal window
function loadTerminalWindowText() {
    var text = headingText + body + flashText;
    document.getElementById("TerminalWindow").innerHTML = "" + text;
    $(".terminal-window").animate({ scrollTop: $('#TerminalWindow').height() }, "slow");
}
// docs: sci-fic to understand what you typed
function demystify(input) {
    //input = input.replace("&nbsp;", " ");
    var brokenInput = input.split(" "); var flag = "0";
    for (var i = 0; i < helpSet.length; i++) {
        if (brokenInput[0] == helpSet[i].command) {
            eval(helpSet[i].handler); flag = "1";
        }
        else {
            continue;
        }
    }
    (flag=="0")?errorText():"";
}
function errorText() {
    body += "<p><span class='highlight root'>root$</span>" + document.getElementById("userInput").innerHTML + "</p>";
    body += "<p class='error'>Terminal didn't get what you meant. Would you mind being more specific, please?</p>";
    loadTerminalWindowText();
}

var helpSet = [
    { "category": "math", "command": "square", "arguments": "1", "args": "5", "handler": "square(brokenInput[1])", "description": "Returns square of a number" },
    { "category": "math", "command": "cube", "arguments": "1", "args": "5", "handler": "cube(brokenInput[1])", "description": "Returns cube of a number" },
    { "category": "math", "command": "toss", "arguments": "0", "args": "", "handler": "toss()", "description": "Returns either heads or tails" },
    { "category": "math", "command": "dice", "arguments": "0", "args": "", "handler": "dice()", "description": "Returns a number from the dice" },
    { "category": "math", "command": "encrypt", "arguments": "1", "args": "plaintext", "handler": "hash(brokenInput[1])", "description": "Returns a number from the dice" },
    { "category": "math", "command": "code", "arguments": "", "args": "", "handler": "randomCode() ", "description": "Generates and returns a random code of 6 alpha-numeric characters" },
    { "category": "api", "command": "joke", "arguments": "0", "args": "", "handler": "joke()", "description": "Returns a random joke" },
    { "category": "api", "command": "weather", "arguments": "1", "args": "London", "handler": "weather(brokenInput[1])", "description": "Returns the weather forecast for the city mentioned as input" },
    { "category": "api", "command": "define", "arguments": "1", "args": "gratitude", "handler": "defineWord(brokenInput[1])", "description": "Returns the definition of the given word" },
    { "category": "api", "command": "random-profile", "arguments": "0", "args": "", "handler": "randomUsers()", "description": "Returns random user profiles" },
    { "category": "api", "command": "country", "arguments": "1", "args": "Australia", "handler": "countryInfo()", "description": "Returns country information" },
    { "category": "general", "command": "clear", "arguments": "0", "args": "", "handler": "clearScreen()", "description": "Clears the screen" },
    { "category": "general", "command": "help", "arguments": "0", "args": "", "handler": "help()", "description": "Display more information regarding the commands and its description" },
    { "category": "general", "command": "date", "arguments": "0", "args": "", "handler": "date()", "description": "Returns the current date" },
    { "category": "general", "command": "time", "arguments": "0", "args": "", "handler": "time()", "description": "Returns the current time" },
    { "category": "general", "command": "emoji", "arguments": "1", "args": "[happy | sad | cry | angry | love | excited | smart | lost | surprise]", "handler": "emoji(brokenInput[1])", "description": "Returns an emoji according to your emotion." },
    { "category": "general", "command": "christmas", "arguments": "0", "args": "", "handler": "christmas()", "description": "Returns Christmas greetings" },
    { "category": "general", "command": "today", "arguments": "0", "args": "", "handler": "dateTime()", "description": "Returns the current day, date and local time" }];

