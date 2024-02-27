import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveContactRest } from "../rest_client/contactos";
import { updateContactRest } from "../rest_client/contactos";
import { deleteContactRest } from "../rest_client/contactos";
import { getAllContacts } from "../rest_client/contactos";

export const ContactsForm = ({ navigation, route }) => {
    let contactRetrieved = route.params.contactParam;
    let isNew = true;
    if (contactRetrieved != null) {
        isNew = false;
    }
    console.log("isNew:", isNew);
    console.log("contactRetrieved:", contactRetrieved);

    const [name, setName] = useState(isNew ? null : contactRetrieved.nombre);
    const [surName, setSurName] = useState(isNew ? null : contactRetrieved.apellido);
    const [phoneNumber, setPhoneNumber] = useState(isNew ? null : contactRetrieved.celular);

    const showMessage = (message) => {
        Alert.alert("CONFIRMACION", message);
        getAllContacts(fnRefreshList);
        navigation.goBack();
    }

    const createContacts = () => {
        console.log("saveContact");
        saveContactRest(
            {
                name: name,
                surname: surName,
                phonenumber: phoneNumber,
            },
            showMessage);
    }
    const updateContacts = () => {
        console.log("actualizando contactos")
        updateContactRest({
            id: contactRetrieved.id,
            name: name,
            surname: surName,
            phonenumber: phoneNumber,
        },
            showMessage);
    }
    const confirmDelete = () => {
        Alert.alert("Confirmacion","Esta seguro que quiere eliminar",
        [{
            text:"SI",
            onPress:deleteContacts
        },
        {
            text:"CANCELAR"
        },]);
    }

    const deleteContacts=()=>{
            deleteContactRest({
                id:contactRetrieved.id
            },showMessage)
    }

    return <View style={styles.container}>
        <Input
            value={name}
            placeholder="NOMBRE"
            onChangeText={(value) => {
                setName(value);
            }}
        />
        <Input
            value={surName}
            placeholder="APELLIDO"
            onChangeText={(value) => {
                setSurName(value);
            }}
        />
        <Input
            value={phoneNumber}
            placeholder="TELEFONO"
            onChangeText={(value) => {
                setPhoneNumber(value);
            }}
        />
        <Button
            title="Guardar"
            onPress={isNew ? createContacts : updateContacts}
        />
        {
            isNew ? <View></View> : <Button
                title="Eliminar"
                onPress={confirmDelete}
            />
        }

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});