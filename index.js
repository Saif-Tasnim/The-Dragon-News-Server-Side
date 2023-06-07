const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT  || 5000;

app.use(cors());

app.get('/', (req,res)=>{
    res.send("News Portal is Running.. Saif Server is open");
})

const categories = require('./data/categories.json');

app.get('/categories', (req,res)=>{
    res.send(categories);
})

app.listen(port , ()=> {
    console.log(`backend server is quite good running ${port}`);
})