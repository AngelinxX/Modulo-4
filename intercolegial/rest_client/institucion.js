const IP = "192.168.100.5";
const PORT = 3003;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllInstitucion = (fnRefreshList) => {
    console.log("get all contacts");
    fetch(
        URL + "institucion"
    ).then(
        (response) => { return response.json() }
    ).then(
        (body) => {
            fnRefreshList(body);
        }
    )
}

export const saveInstitucionRest = (institucion, fnShowMessage) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            aime: institucion.aime,
            nombre: institucion.nombre,
            zona: institucion.zona,
            distrito: institucion.distrito,
            rector: institucion.rector,
            correo: institucion.correo,
        })
    }
    fetch(
        URL + "institucion",config
    ).then(
        (response) => { return response.json() }
    ).then(
        (body) => {
            fnShowMessage();
            console.log(body);
        }
    )
}