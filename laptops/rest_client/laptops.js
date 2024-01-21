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