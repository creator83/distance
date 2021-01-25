const { response } = require('express');
const express = require('express');

const app = express();
app.use(express.static('client/public'));
/*app.get('/', (req, res)=>{
    res.send({some: 'object'});
});*/
const path = require ('path');
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
    console.log('send file');
});

const PORT = process.env.PORT || 80;
app.listen(PORT);