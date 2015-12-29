// docs: beta
// listens to virtual keyboard
function virtualKeyboardListener(input) {
    if (input == "SPACE") {
        listenAndWrite(" ");
    }
    else if (input == "BACKSPACE") {
        deleteText();
    }
    else if (input == "ENTER") {
        enterKey();
    }
    else if (input == "ESCAPE") {
        escapeKey();
    }
    else {
        listenAndWrite(input);
    }
}

// docs: predictive text
var predictiveTextFlag = 0;
var predictiveWords = [];
var flag = 0;

if (!('contains' in String.prototype)) String.prototype.contains = function (str, startIndex) {
    return -1 !== String.prototype.indexOf.call(this, str, startIndex);
};

function predictText(input) {
    var text = input;
    if (text.contains(" ")) {
        flag += 1;
        predictiveTextFlag = 0;
    }
    else {
        flag = 0;
    }
    if (flag == 0) {
        document.getElementById("TypeaheadText").innerHTML = "";
        document.getElementById("Typeahead").style.display = "none";
        document.getElementById("Typeahead").style.display = "block";
        predictiveTextFlag = 1;
        predictiveWords = [];
        var predictiveText = "";
        predictiveText += "<ul>";
        for (var i = 0; i < helpSet.length; i++) {
            if (helpSet[i].command.toString().contains(text) == true) {
                var id=(predictiveWords.push(helpSet[i].command))-1;
                predictiveText += "<li id='Predictive_" + id + "' class='predictive-default' onmouseover=\"mouseoverLi('" + id + "')\" onmouseout=\"mouseoutLi('" + id + "')\" onclick=\"completePredictiveText('" + helpSet[i].command + "')\" title='" + helpSet[i].description + "&#013;Example: " + helpSet[i].command + " " + helpSet[i].args + "' >" + helpSet[i].command + "</li>";
            }
            else {
            }
        }
        document.getElementById("TypeaheadText").innerHTML = predictiveText + "</ul>";
        if (predictiveWords.length == 0) {
            document.getElementById("Typeahead").style.display = "none"; predictiveWords = []; predictiveTextFlag = 0;
        }
    }
    else {
        predictiveTextFlag = 0;
    }
}
var activeFlag = 0;
function mouseoverLi(id) {
    activeFlag = id;
    $("#Predictive_" + id).addClass('predictive-active');
}
function mouseoutLi(id) {
    $("#Predictive_" + id).removeClass('predictive-active');
}
function arrowUp() {
    mouseoutLi(activeFlag);
    (activeFlag == 0) ? activeFlag = (predictiveWords.length - 1) : activeFlag = activeFlag - 1;
    mouseoverLi(activeFlag);
}
function arrowDown() {
    mouseoutLi(activeFlag);
    (activeFlag == (predictiveWords.length - 1)) ? activeFlag = 0 : activeFlag = activeFlag+1;
    mouseoverLi(activeFlag);
}
function completePredictiveText(input) {
    document.getElementById("Typeahead").style.display = "none";
    predictiveTextFlag = 0;
    activeFlag = 0;
    predictiveWords = [];
    document.getElementById("userInput").innerHTML = input;
}
function toggleVirtualKeyboard() {
    $(".virtual-keyboard-toggle-btn").toggleClass("virtual-keyboard-toggle-btn-active");
    $(".virtual-keyboard-area").toggleClass("visible-virtual-keyboard", 3000);
}