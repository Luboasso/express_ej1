const express = require("express");
const app = express();
const path = require("path")

app.use(express.json())
app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/products', (req, res) => {
    res.send("Product list");
});

app.post('/products', (req, res) => {
    res.send("Create product");
});

app.put('/products', (req, res) => {
    res.send("Update product");
});

app.delete('/products', (req, res) => {
    res.send("Delete product");
});

app.get('/users', (req, res) => {
    res.send("User list");
});

app.post('/users', (req, res) => {
    res.send("Create user");
});

app.put('/users', (req, res) => {
    res.send("Update user");
});

app.delete('/users', (req, res) => {
    res.send("Delete user");
});


app.listen("3000", () => {

    console.log("Server started on port 3000");
    
    });