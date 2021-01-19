const express = require('express');
const app = express();
const port = 33337;

app.use(express.json());
app.use(function(req, res, next){

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');

    next();
});

products = new Map();
products.set(0, {name: 'RTX 3090 Strix', description: 'Graficka kartica'});
products.set(1, {name: 'Asus ROG B450', description: 'Maticna ploca'});
products.set(2, {name: 'Ryzen 7 3700x', description: 'Procesor'});
products.set(3, {name: 'CoolerMaster 750M', description: 'Napajanje'});
products.set(4, {name: 'Samsung Galaxy S21', description: 'Telefon'});
products.set(5, {name: 'NZXT H510', description: 'Kuciste'});

//Transformise mapu u JSON format
function toJSON() {
    let data = {}
    for ([key, value] of products) {
        data[key] = value
    }

    return data;
};

// Brisanje podatka i vracanje preostalih proizvoda
app.delete('/admin/proizvodi', (req, res) => {
    let key = req.body.id;
    products.delete(key);

    
    data = toJSON();
    res.send(data);
});

app.get('/admin/proizvodi', (req, res) => {
    res.send(toJSON());
});

app.post('/admin/unos-novog-proizvoda', (req, res) => {
    // Citanje podataka iz body-ja
    let name = req.body.name;
    console.log(name);
    let description = req.body.description;
    console.log(description);
    
    // Dodavanje proizvoda u mapu
    products.set(products.size, {name: name, description: description});
    res.status(200).send(toJSON());
    console.log("Bio sam ovde");
});

app.listen(port, () => {
    console.log(`Listening on htpp://localhost:${port}`)
})
