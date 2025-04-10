const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/slike', (req, res) => {
    const dataPath = path.join(__dirname, 'images.json');
    const images = JSON.parse(fs.readFileSync(dataPath));
    res.render('slike', { images });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});