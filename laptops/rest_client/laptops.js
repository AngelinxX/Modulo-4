const IP = "192.168.100.177";
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
        fnShowMessage();
        console.log(body);
    })

}