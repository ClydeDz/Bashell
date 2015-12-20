// docs: global variables
var headingText = "<p>Bashell - The Terminal Window by Clyde D'Souza<br/>Type <span class='highlight'>help</span> to view the list of available commands and its description.</p>";
var body = "";
var flashText = "<p><span class='highlight root'>root$</span><span id='userInput'></span><blink><span class='cursor blink'></span></blink><p>";

// docs: listens constantly for a keyboard input from the user
function listenAndWrite(event) {
    var x = event.which || event.keyCode;
    if (x == 8) {
        deleteText();
    }
    else if (x == 13) {
        executeCommand();
    }
    else {
        document.getElementById("userInput").innerHTML += "" + String.fromCharCode(x);
    }    
}
// docs: performs the backspace button functionality
function deleteText() {
    document.getElementById("userInput").innerHTML=document.getElementById("userInput").innerHTML.substring(0, document.getElementById("userInput").innerHTML.length - 1);
}
// docs: executes commands that the user has typed in the terminal
function executeCommand() {
    var input = document.getElementById("userInput").innerHTML;
    demystify(input.toLowerCase());
}
function loadBody() {
    loadApis();
    loadTerminalWindowText();
}
// docs: loads text in the terminal window
function loadTerminalWindowText() {
    var text = headingText+body+flashText;
    document.getElementById("TerminalWindow").innerHTML = "" + text;
    $(".terminal-window").animate({ scrollTop: $(document).height() }, "slow");
}
// docs: sci-fic to understand what you typed
function demystify(input) {
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
    { "category": "math", "command": "toss", "arguments": "0", "args": "", "handler": "toss()", "description": "Returns either heads or tails" },
    { "category": "math", "command": "dice", "arguments": "0", "args": "", "handler": "dice()", "description": "Returns a number from the dice" },
    { "category": "math", "command": "encrypt", "arguments": "1", "args": "plaintext", "handler": "hash(brokenInput[1])", "description": "Returns a number from the dice" },
    { "category": "math", "command": "code", "arguments": "", "args": "", "handler": "randomCode() ", "description": "Generates and returns a random code of 6 alpha-numeric characters" },
    { "category": "api", "command": "joke", "arguments": "0", "args": "", "handler": "startWeather()", "description": "Returns a random joke" },
    { "category": "api", "command": "weather", "arguments": "1", "args": "London", "handler": "weather(brokenInput[1])", "description": "Returns the weather forecast for the city mentioned as input" },
    { "category": "general", "command": "clear", "arguments": "0", "args": "", "handler": "clearScreen()", "description": "Clears the screen" },
    { "category": "general", "command": "help", "arguments": "0", "args": "", "handler": "help()", "description": "Display more information regarding the commands and its description" },
    { "category": "general", "command": "date", "arguments": "0", "args": "", "handler": "date()", "description": "Returns the current date" },
    { "category": "general", "command": "time", "arguments": "0", "args": "", "handler": "time()", "description": "Returns the current time" },
    { "category": "general", "command": "emoji", "arguments": "1", "args": "[happy | sad | cry | angry | love | excited | smart | lost | surprise]", "handler": "emoji(brokenInput[1])", "description": "Returns an emoji according to your emotion." },
    { "category": "general", "command": "christmas", "arguments": "0", "args": "", "handler": "christmas()", "description": "Returns Christmas greetings" },
    { "category": "general", "command": "today", "arguments": "0", "args": "", "handler": "dateTime()", "description": "Returns the current day, date and local time" }];

