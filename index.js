
const reservas = require("src/parse/parse.js");
// myJQuery
$ = function(selector) {
    var elem = document.querySelector(selector);
    elem.on = elem.addEventListener;
    elem.off = elem.removeEventListener;
    
    return elem;
  }
$.elem()