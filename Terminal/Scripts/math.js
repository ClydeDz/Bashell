function square(a) {
    generalOutput("Square of "+a+" is "+a * a);
}
function cube(a) {
    generalOutput("Cube of "+a+" is "+ a*a*a);
}
function randomCode() {
    var s = ""; var x = 6;
    while (s.length < x && x > 0) {
        var r = Math.random();
        s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
    }
    generalOutput(s.toUpperCase());
}
function randomNumber() {
    //generalOutput();
}
function hash(input) {
        var hash = 0, i, chr, len;
        if (input.length == 0) return hash;
        for (i = 0, len = input.length; i < len; i++) {
            chr = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        generalOutput(hash);
}
function toss() {
    generalOutput("Coin fliped to "+((Math.random(0, 1)) > 0.5 ? "Heads" : "Tails"));
}
function dice() {
    generalOutput("Dice rolled to " + (Math.floor(Math.random() * 6) + 1));
}