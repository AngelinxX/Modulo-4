const IP = "192.168.100.5";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllContacts = (fnRefreshList) => {
    console.log("getAllContacts")
    fetch(
        URL + "contactos"
    ).then(
        (response) => { return response.json() }
    ).then(
        (body) => {
            fnRefreshList(body);
        }
    )
}

export const saveContactRest = (contact, fnShowMessage) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: contact.name,
            apellido: contact.surname,
            celular: contact.phonenumber,
        })
    }
    fetch(
        URL + "contactos", config
    )
        .then((response) => { return response.json() })
        .then((body) => {
            fnShowMessage("Se ha creado el contacto");
            console.log(body);
        })
}

export const updateContactRest = (contact, fnShowMessage) => {
    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: contact.id,
            nombre: contact.name,
            apellido: contact.surname,
            celular: contact.phonenumber,
        })
    }
    fetch(
        URL + "contactos/" + contact.id, config
    )
        .then((response) => { return response.json() })
        .then((body) => {
            fnShowMessage("Contacto actualizado");
            console.log(body);
        })
}

export const deleteContactRest = (contact, fnShowMessage) => {
    const config = {
        method: "DELETE",
    }
    fetch(
        URL + "contactos/" + contact.id, config
    )
        .then((response) => { return response.json() })
        .then((body) => {
            fnShowMessage("Se ha eliminado el contacto");
            console.log(body);
        })
}