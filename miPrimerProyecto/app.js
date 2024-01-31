const express=require("express");
const app=express();
const puerto=3001;
const bodyParser=require("body-parser")
//contacto id,nombre,apellido,celular

app.use(bodyParser.json());

app.use("/contactos",(request,response,next)=>{
    console.log("headers:",request.headers);
    console.log("body:",request.body);
    next();
});

app.listen(puerto,()=>{
    console.log("Servidor listo en el puerto "+3001);
});

app.get("/contactos",(request,response)=>{
    const contactos=[
        {id:1,nombre:"Angel",apellido:"Fajardo",celular:"0992276544"},
        {id:2,nombre:"Jose",apellido:"Andrango",celular:"0992123544"},
        {id:3,nombre:"Pepe",apellido:"Teran",celular:"0998723544"},
    ];
    console.log("ingresa al get");
    response.send(contactos);
})

app.post("/contactos",(req,resp)=>{
    req.body.id=99;
    resp.send(req.body);
});

app.put("/contactos/:idParam",(req,resp)=>{
    const id=req.params.idParam;
    console.log("id",id);
    resp.send(req.body);
});

app.delete("/contactos/:id",(req,resp)=>{
    const id =req.params.id;
    console.log("id:",id);
    resp.send({id:id});
});