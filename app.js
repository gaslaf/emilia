const express = require('express');
const path = require('path');
const port = 3030;

const app = express();

app.use(express.static('public')); // recursos estáticos como css o imagenes está en la carpeta public


app.get('/', (req,res) => { res.sendFile(path.join(__dirname,'views','home.html'))})
app.get('/about', (req,res) => { res.sendFile(path.join(__dirname,'views','about.html'))})
app.get('/contact', (req,res) => { res.sendFile(path.join(__dirname,'views','contact.html'));})
app.get('/music', (req,res) => { res.sendFile(path.join(__dirname,'views','music.html'))})

app.listen(port, () => console.log('Sv corriendo'));
