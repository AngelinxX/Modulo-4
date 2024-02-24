const express=require("express");
const bodyParser=require("body-parser")
const app=express();
const puerto=3003;
//institucion: aime, nombre, zona, distrito, rector, correo
//tutor: nombre, apellido, cedula, celular, correo
//estudiante: nombre, apellido, cedula, celular, correo, colegio, rol

app.use(bodyParser.json());

app.use("/institucion",(request,response,next)=>{
    console.log("headers:",request.headers);
    console.log("body:",request.body);
    next();
});

app.use("/tutor",(request,response,next)=>{
    console.log("headers:",request.headers);
    console.log("body:",request.body);
    next();
});

app.use("/persona",(request,response,next)=>{
    console.log("headers:",request.headers);
    console.log("body:",request.body);
    next();
});

app.listen(puerto,()=>{
    console.log("Servidor listo en el puerto "+3003);
});

app.get("/institucion",(request,response)=>{
    const institucion=[
        {aime:"00h001", nombre:"Luis Felipe Borja", zona:"04", distrito:"02", rector:"Pedro Cortez", correo:"pcortez@luisfelipeborja.edu.ec"},
        {aime:"00h003", nombre:"Isabel Yanez", zona:"04", distrito:"02", rector:"Pedro Cortez", correo:"pcortez@luisfelipeborja.edu.ec"},
        {aime:"00h005", nombre:"Jose Mejia Lequerica", zona:"04", distrito:"02", rector:"Pedro Cortez", correo:"pcortez@luisfelipeborja.edu.ec"}
    ]
    response.send(institucion);
});

app.post("/institucion",(request,response)=>{
    request.body.id=50;
    response.send(request.body);
});

app.get("/tutor",(request,response)=>{
    const tutor=[
        {nombre:"Andres", apellido:"Lascano", cedula:"1720286482", celular:"09784735287", correo:"alascano@luisfelipeborjaedu,ec"}
    ]
    response.send(tutor);
});

app.post("/tutor",(request,response)=>{
    request.body.id=99;
    response.send(request.body);
});

app.post("/persona",(request,response)=>{
    request.body.id=10;
    response.send(request.body);
});