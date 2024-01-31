const IP = "192.168.100.5";
const PORT = 3002;
const URL = "http://"+IP+":"+PORT+"/";

export const getAllLaptops=(fnRefreshList)=>{
    console.log("getAllLaptops")
    fetch(
        URL+"info"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            fnRefreshList(body);
        }
    )
}
export const saveInfoRest=(contact,fnShowMessage)=>{
    const config={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            Marca:contact.Marcas,
            Color:contact.Colores,
            Codigo:contact.Codigos,
        })
    }
    fetch(
        URL+"info",config
    )
    .then((response)=>{return response.json()})
    .then((body)=>{
        fnShowMessage("Informacion Laptop Guardada");
        console.log(body);
    })

}

export const updateInfoRest=(contact,fnShowMessage)=>{
    const config={
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            id:contact.id,
            Marca:contact.Marcas,
            Color:contact.Colores,
            Codigo:contact.Codigos,
        })
    }
    fetch(
        URL+"info/"+contact.id,config
    )
    .then((response)=>{return response.json()})
    .then((body)=>{
        fnShowMessage("Informacion laptop actualizada");
        console.log(body);
    })

}

export const deleteInfoRest=(contact,fnShowMessage)=>{
    const config={
        method:"DELETE",
    }
    fetch(
        URL+"info/"+contact.id,config
    )
    .then((response)=>{return response.json()})
    .then((body)=>{
        fnShowMessage("Informacion laptop eliminada");
        console.log(body);
    })

}