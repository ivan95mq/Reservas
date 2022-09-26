const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())

app.use(express.static(__dirname + '/public'))
app.post('/upload',(req,res)=>{
    let File=req.files.file
    File.mv(`./assets/files/${File.name}`,err=>{
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'Archivo subido con exito' })
    })
})

app.listen(3000,() => console.log('Corriendo'))