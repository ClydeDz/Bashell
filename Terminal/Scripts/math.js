function square(a) {
    return a * a;
}
function randomCode() {
    var s = ""; var x = 6;
    while (s.length < x && x > 0) {
        var r = Math.random();
        s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
    }
    return s.toUpperCase();
}
function randomNumber() {

}
function hash(input) {
        var hash = 0, i, chr, len;
        if (input.length == 0) return hash;
        for (i = 0, len = input.length; i < len; i++) {
            chr = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
}
function toss() {
    return (Math.random(0, 1)) > 0.5 ? "Heads" : "Tails";
}
function dice() {
    return Math.floor(Math.random() * 6) + 1 ;
}