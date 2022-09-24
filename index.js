// myJQuery
$ = function (selector) {
    var elem = document.querySelector(selector);
    elem.on = elem.addEventListener;
    elem.off = elem.removeEventListener;

    return elem;
}

const fs = require('fs');
const parser = require('csv-parser');
const data = [];

fs.createReadStream('./assets/reservas.csv')
    .pipe(parser({
        separator: ';',
        newline: '\n',
        skipLines: 3,
        headers: ["Booking","Booking date","Acronym","Name","Address","Postal code","City","Country","VAT number","Email","Telephone","Reference","Adults","Children","Infants","Origin","Arrival","Departure","Nights","Channel commission","Total","Extras","Supplements","Early booking discount","Long stay discount","Last minute discount","Standard discount","Promotion discount","Booking fee","Cleaning fee","Check-In fee","Short-stay fee","Tax","Paid","Security Deposit","Owner comission","Stay","First payment","Property","Owner","Owner's share","Amount for the agency","Rate","Language"],
    }))
    .on('data', row => data.push(row))
    .on('end', () => {
        
        data.forEach(element => {

            console.log(element.name);
            element.forEach(e => {
                
            });
        });
    } )
