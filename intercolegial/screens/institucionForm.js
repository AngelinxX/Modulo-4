import { View, Text, StyleSheet,Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveInstitucionRest } from "../rest_client/institucion";

export const InstitucionForm = ({navigation}) => {
    const [aime, setAime] = useState();
    const [nombre, setNombre] = useState();
    const [zona, setZona] = useState();
    const [distrito, setDistrito] = useState();
    const [rector, setRector] = useState();
    const [correo, setCorreo] = useState();

    const showMessage=()=>{
        Alert.alert("Confirmacion","Institucion Creada")
    }

    const saveInstitucion = () => {
        console.log("savecontact");
        navigation.goBack();
        saveInstitucionRest(
            {
                aime: aime,
                nombre: nombre,
                zona: zona,
                distrito: distrito,
                rector: rector,
                correo: correo,
            },
            showMessage()
        );
    }

    return <View style={styles.container}>
        <Input
            value={aime}
            placeholder="aime"
            onChangeText={(value) => {
                setAime(value);
            }}
        />
        <Input
            value={nombre}
            placeholder="nombre"
            onChangeText={(value) => {
                setNombre(value);
            }}
        />
        <Input
            value={zona}
            placeholder="zona"
            onChangeText={(value) => {
                setZona(value);
            }}
        />
        <Input
            value={distrito}
            placeholder="distrito"
            onChangeText={(value) => {
                setDistrito(value);
            }}
        />
        <Input
            value={rector}
            placeholder="rector"
            onChangeText={(value) => {
                setRector(value);
            }}
        />
        <Input
            value={correo}
            placeholder="Correo"
            onChangeText={(value) => {
                setCorreo(value);
            }}
        />
        <Button
            title="Guardar"
            onPress={saveInstitucion}
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