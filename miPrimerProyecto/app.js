const express = require("express");
const app = express();
const puerto = 3001;
const bodyParser = require("body-parser");
const { Client } = require("pg");
//contacto id,nombre,apellido,celular

app.use(bodyParser.json());

app.use("/contactos", (request, response, next) => {
    console.log("headers:", request.headers);
    console.log("body:", request.body);
    next();
});

app.listen(puerto, () => {
    console.log("Servidor listo en el puerto " + 3001);
});

app.get("/contactos", (request, response) => {
    const client = new Client({
        user: "postgres",
        host: "192.168.100.5",
        database: "contactos",
        password: "Ceydis.159783",
        port: 5432,
    })
    client.connect();
    const contactos = [
        { id: 1, nombre: "Angel", apellido: "Fajardo", celular: "0992276544" },
        { id: 2, nombre: "Jose", apellido: "Andrango", celular: "0992123544" },
        { id: 3, nombre: "Pepe", apellido: "Teran", celular: "0998723544" },
    ];
    client.query("select * from contactos")
        .then(responseQuery => {
            console.log(responseQuery.get);
            response.send(responseQuery.rows);
            client.end();
        })
        .catch(err => {
            console.log(err);
            client.end();
        })
    console.log("ingresa al get");
})

app.post("/contactos", (req, resp) => {
    //req.body.id = 99;
    const client = new Client({
        user: "postgres",
        host: "192.168.100.5",
        database: "contactos",
        password: "Ceydis.159783",
        port: 5432,
    })
    client.connect();
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const celular = req.body.celular;
    client.query("insert into contactos (nombre, apellido, celular) values ($1,$2,$3)", [nombre, apellido, celular])
        .then(responseQuery => {
            console.log(responseQuery.rows);
            client.end();
        })
        .catch(err => {
            console.log(err);
            client.end();
        })
    resp.send(req.body);
});

app.put("/contactos/:idParam", (req, resp) => {
    const client = new Client({
        user: "postgres",
        host: "192.168.100.5",
        database: "contactos",
        password: "Ceydis.159783",
        port: 5432,
    })
    client.connect();
    const id = req.params.idParam;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const celular = req.body.celular;
    client.query("update contactos set nombre=$2,apellido=$3,celular=$4 where id = $1", [id, nombre, apellido, celular])
        .then(responseQuery => {
            console.log(responseQuery.rows);
            client.end();
        })
        .catch(err => {
            console.log(err);
            client.end();
        })
    console.log("id", id);
    resp.send(req.body);
});

app.delete("/contactos/:id", (req, resp) => {
    const client = new Client({
        user: "postgres",
        host: "192.168.100.5",
        database: "contactos",
        password: "Ceydis.159783",
        port: 5432,
    })
    client.connect();
    const id = req.params.id;
    client.query("delete from contactos where id = $1", [id])
        .then(responseQuery => {
            console.log(responseQuery.rows);
            client.end();
        })
        .catch(err => {
            console.log(err);
            client.end();
        })
    console.log("id:", id);
    resp.send({ id: id });
});