// myJQuery
$ = function (selector) {
    var elem = document.querySelector(selector);
    elem.on = elem.addEventListener;
    elem.off = elem.removeEventListener;

    return elem;
}