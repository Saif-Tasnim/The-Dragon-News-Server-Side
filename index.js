const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("News Portal is Running.. Saif Server is open");
})

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const data = news.find(n => n._id === id);
    res.send(data);
})

app.get("/categories/:id", (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news);
    }

    else {
        const catData = news.filter(n => n.category_id === id);
        res.send(catData);
    }

})

app.listen(port, () => {
    console.log(`backend server is quite good running ${port}`);
})