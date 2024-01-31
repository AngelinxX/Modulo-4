const express=require("express");
const app=express();
const puerto=3002;
const bodyParser=require("body-parser")
//contacto id,nombre,apellido,celular

app.use(bodyParser.json());

app.use("/info",(request,response,next)=>{
    console.log("headers:",request.headers);
    console.log("body:",request.body);
    next();
});

app.listen(puerto,()=>{
    console.log("Servidor listo en el puerto "+puerto);
});

app.get("/info",(request,response)=>{
    const contactos=[
        {id:1,Marca:"Dell",Color:"Negro",Codigo:"NX1"},
        {id:2,Marca:"Toshiba",Color:"Gris",Codigo:"NX2"},
        {id:3,Marca:"HP",Color:"Blanca",Codigo:"NX3"},
    ];
    console.log("ingresa al get");
    response.send(contactos);
})

app.post("/info",(req,resp)=>{
    req.body.id=99;
    resp.send(req.body);
});

app.put("/info/:idParam",(req,resp)=>{
    const id=req.params.idParam;
    console.log("id",id);
    resp.send(req.body);
});

app.delete("/info/:id",(req,resp)=>{
    const id =req.params.id;
    console.log("id:",id);
    resp.send({id:id});
});