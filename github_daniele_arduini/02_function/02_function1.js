// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var f = function dado() {
    return Math.floor(Math.random() * 6 + 1);
};
console.log("f(): ", f());
var g = function () {
    return Math.floor(Math.random() * 6 + 1);
};
var h = function () { return Math.floor(Math.random() * 6 + 1); };
console.log("g(): ", g());
console.log("h(): ", h());
var hello = function () {
    console.log("hello!");
};
hello();
var printMessage = function (msg) {
    console.log(msg);
};
printMessage("Ciao!");
setTimeout(function () {
    console.log("dentro la setTimeout, f(): ", f());
}, 5000);
setInterval(function () {
    console.log("dentro la setInterval, f(): ", f());
}, 2000);
