const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname+'/auth/dist/auth'));

app.get('/*', (req,res)=> res.sendFile(path.join(__dirname)));

app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3700, () => console.log('Server started at port : 3700'));


app.use('/employees', employeeController);