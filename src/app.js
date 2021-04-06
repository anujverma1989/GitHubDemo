const express = require('express');
const { appendFileSync } = require('fs');
const path = require('path');
const hbs = require('hbs');
const app = express();

// const staticPath = path.join(__dirname, '../public');
// app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

app.get("/", (req, res) => {
    res.render('index',{
        myName:"anuj verma"
    });
});


app.get("/", (req, res) => {
    res.send("this is first node express example!");
});

app.listen(8080, () => {
    console.log("express is listing");
});