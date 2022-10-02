//const global = require("./src/data/globales")
//const CSV = require('./src/parse/parse')
const fs = require("fs");
const parser = require("csv-parser");
const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()


var global = {
    url: "./assets/reservas.csv"
}
var data2
var user;
var data = [];
const getUserFromId = (userId) => {
    fs.createReadStream(global.url)
        .pipe(parser({
            separator: ';',
            newline: '\n',
            skipLines: 0,
            headers: ["Booking", "Booking date", "Acronym", "Name", "Address", "Postal code", "City", "Country", "VAT number", "Email", "Telephone", "Reference", "Adults", "Children", "Infants", "Origin", "Arrival", "Departure", "Nights", "Channel commission", "Total", "Extras", "Supplements", "Early booking discount", "Long stay discount", "Last minute discount", "Standard discount", "Promotion discount", "Booking fee", "Cleaning fee", "Check-In fee", "Short-stay fee", "Tax", "Paid", "Security Deposit", "Owner comission", "Stay", "First payment", "Property", "Owner", "Owner's share", "Amount for the agency", "Rate", "Language"],
        }))
        .on('data', row => data.push(row))
        .on('end', () =>
            data.forEach(element => {
                if (element['Booking'] === userId) {
                    user = element
                }
            })
        )
    return user
}
const getUsers = () => {
    fs.createReadStream(global.url)
        .pipe(parser({
            separator: ';',
            newline: '\n',
            skipLines: 0,
            headers: ["Booking", "Booking date", "Acronym", "Name", "Address", "Postal code", "City", "Country", "VAT number", "Email", "Telephone", "Reference", "Adults", "Children", "Infants", "Origin", "Arrival", "Departure", "Nights", "Channel commission", "Total", "Extras", "Supplements", "Early booking discount", "Long stay discount", "Last minute discount", "Standard discount", "Promotion discount", "Booking fee", "Cleaning fee", "Check-In fee", "Short-stay fee", "Tax", "Paid", "Security Deposit", "Owner comission", "Stay", "First payment", "Property", "Owner", "Owner's share", "Amount for the agency", "Rate", "Language"],
        }))
        .on('data', row => data.push(row))
        .on('end', () =>
            data2 = data
        )
    return data2
}


app.use(fileUpload())
//Rutas de acceso
app.use(express.static(__dirname + '/public'))
app.post('/upload', (req, res) => {
    let File = req.files.file
    global.url = `./assets/files/`+ File.name
    File.mv(`./assets/files/${File.name}`, err => {
        if (err) return res.status(500).send({ message: err })

        return res.status(200).send({ message: 'Archivo subido con exito' })
    })
})
app.get('/users', (req, res) => {
    return res.json(getUsers())
})
app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    return res.json(getUserFromId(req.params.id))
})
app.listen(3003, function () {
    console.log(`Corriendo http://localhost:${this.address().port}`)
})

