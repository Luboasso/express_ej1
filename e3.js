const express = require("express");
const app = express();
const path = require("path")
const PORT = 3000;

app.use(express.json())
const items = [
    { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
    { id: 2, nombre: 'FIFA 23 PS5' , precio: 1000},
    {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
    {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
    {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
  ];

  app.get("/products", (req, res) => {
    res.send({description:"Productos",items});
  });

  app.post("/products", (req, res) => {
    const newItem = {
      id: items.length + 1,
      nombre: req.body.nombre,
      precio: req.body.precio,
      status: "active",
    };
    items.push(newItem);
    res.status(201).send(items);
  });

  app.put("/products/:id", (req, res) => {
    const found = items.some((items) => items.id == req.params.id);
    if (found) {
      items.forEach((item) => {
        if (item.id == req.params.id) {
          item.nombre = req.body.nombre;
          item.precio = req.body.precio;
        }
      });
      res.send(items);
    } else {
      res.status(404).send(`El producto ${req.params.id} no existe`);
    }
  });

  app.delete("/products/:id", (req, res) => {
    const found = items.some((item) => item.id == req.params.id);
    if (found) {
      res.send(items.filter((item) => item.id != req.params.id));
    }else{
      res.status(404).send(`El producto ${req.params.id} no existe`);
    }
  });

  app.get("/products/:precio", (req, res) => {
    const found = items.some((item) => item.precio == req.params.precio);
    if (found) {
      res.send(items.filter((item) => item.precio == req.params.precio));
    } else {
      res.send(`item with price: ${req.params.precio} not found`);
    }
  });

  app.get("/products/5250", (req, res) => {
    const found = items.some((item) => item.precio >= 50 && item.precio <= 250);
    if (found) {
      res.send(items.filter((item) => item.precio >= 50 && item.precio <= 250));
    } else {
      res.send(`item not found`);
    }
  });

  app.get("/products/f/:id", (req, res) => {
    const found = items.some((item) => item.id == req.params.id);
    if (found) {
      res.send(items.filter((item) => item.id == req.params.id));
    } else {
      res.send(`item with id: ${req.params.id} not found`);
    }
  });
  
  app.get("/products/n/:nombre", (req, res) => {
    const found = items.some((item) => item.nombre == req.params.nombre);
    if (found) {
      res.send(items.filter((item) => item.nombre == req.params.nombre));
    } else {
      res.send(`item with name: ${req.params.nombre} not found`);
    }
  });


  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));