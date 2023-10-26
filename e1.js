const express = require("express");
const app = express();
const path = require("path")

app.use(express.json())
app.get('/', (req, res) => {
    res.send(`Servidor levantado en el puerto ${3000}`);
});

app.listen("3000", () => {

    console.log("Server started on port 3000");
    
    });