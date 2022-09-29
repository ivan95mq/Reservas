//const global = require("./src/data/globales")
//const CSV = require('./src/parse/parse')
const fs = require("fs");
const parser = require("csv-parser");
const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
var data = [];
var data2 = [];
var user = 0;
var global = {
    url: "./assets/reservas.csv"
}
console.log(global.url)
data2 = fs.createReadStream(global.url)
    .pipe(parser({
        separator: ';',
        newline: '\n',
        skipLines: 0,
        headers: ["Booking", "Booking date", "Acronym", "Name", "Address", "Postal code", "City", "Country", "VAT number", "Email", "Telephone", "Reference", "Adults", "Children", "Infants", "Origin", "Arrival", "Departure", "Nights", "Channel commission", "Total", "Extras", "Supplements", "Early booking discount", "Long stay discount", "Last minute discount", "Standard discount", "Promotion discount", "Booking fee", "Cleaning fee", "Check-In fee", "Short-stay fee", "Tax", "Paid", "Security Deposit", "Owner comission", "Stay", "First payment", "Property", "Owner", "Owner's share", "Amount for the agency", "Rate", "Language"],
    }))
    .on('data', row => data.push(row))
    .on('end', () => {
        return data;
    });
const getUserFromId = (userId) => {
    data2.forEach(element => {
        if (element['Booking'] === userId) {
            console.log(element);
            user = element;
            return user;
        }
    }
    )
};
//Llamo al metodo de lectura




//Rutas de acceso

app.use(fileUpload())
app.use(express.static(__dirname + '/public'))
app.post('/upload', (req, res) => {
    let File = req.files.file
    File.mv(`./assets/files/${File.name}`, err => {
        if (err) return res.status(500).send({ message: err })

        return res.status(200).send({ message: 'Archivo subido con exito' })
    })
})
app.get('/user', (req, res) => {

    if (error) return res.status(500).send(error);
    return res.status(200).send(data2)
})
app.get('/user/:id', (req, res) => {
    let userId = req.params.id
    getUserFromId(userId, (error, user) => {
        if (error) return res.status(500).send(error);
        return res.status(200).send(user)
    })
})

app.listen(3000, () => console.log('Corriendo'))