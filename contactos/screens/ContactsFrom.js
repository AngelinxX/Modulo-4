import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveContactRest } from "../rest_client/contactos";

export const ContactsForm = ({ navigation }) => {
    const [name, setName] = useState();
    const [surName, setSurName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const showMessage = () => {
        Alert.alert("CONFIRMACION", "Contacto creado exitoso")
    }

    const saveContacts = () => {
        console.log("saveContact");
        navigation.goBack();
        saveContactRest(
            {
                name: name,
                surname: surName,
                phonenumber: phoneNumber,
            },
            showMessage
        );
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
            onPress={saveContacts}
        />
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