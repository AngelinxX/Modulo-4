const IP = "192.168.100.177";
const PORT = 3001;
const URL = "http://"+IP+":"+PORT+"/";

export const getAllContacts=(fnRefreshList)=>{
    console.log("getAllContacts")
    fetch(
        URL+"contactos"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            fnRefreshList(body);
        }
    )
}