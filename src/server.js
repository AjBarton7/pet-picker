const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const Pet = require('./pets');

const publicDir = path.join(__dirname, '..', 'public');
const staticServer = express.static(publicDir);
app.use(staticServer);

app.use(express.json());

app.use((req, res, next) => {
    req.Pet = Pet;
    next();
  });



app.get('/pet', (req, res) => {
    const pets = Pet.list()
});



app.listen(3000, () => {
    console.log('Listening')
})

