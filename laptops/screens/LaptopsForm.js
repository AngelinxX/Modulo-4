import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveInfoRest } from "../rest_client/laptops";
import { updateInfoRest } from "../rest_client/laptops";
import { deleteInfoRest } from "../rest_client/laptops";

export const LaptopsForm = ({ navigation, route }) => {
    let laptopRetrieved = route.params.listParam
    let isNew = true;
    if (laptopRetrieved != null) {
        isNew = false;
    }
    console.log("isNew:", isNew);
    console.log("laptopRetrieved:", laptopRetrieved);

    const [marca, setMarca] = useState(isNew ? null : laptopRetrieved.Marca);
    const [color, setColor] = useState(isNew ? null : laptopRetrieved.Color);
    const [codigo, setCodigo] = useState(isNew ? null : laptopRetrieved.Codigo);

    const showMessage = (message) => {
        Alert.alert("CONFIRMACION", message);
        navigation.goBack();
    }

    const createInfo = () => {
        console.log("saveInfo");
        saveInfoRest(
            {
                Marcas: marca,
                Colores: color,
                Codigos: codigo,
            },
            showMessage
        );
    }
    const updateList = () => {
        console.log("actualizando contactos")
        updateInfoRest({
            id: laptopRetrieved.id,
            Marcas: marca,
            Colores: color,
            Codigos: codigo,
        },
            showMessage);
    }

    const confirmDelete = () => {
        Alert.alert("Confirmacion","Esta seguro que quiere eliminar",
        [{
            text:"SI",
            onPress:deleteLaptop
        },
        {
            text:"CANCELAR"
        },]);
    }

    const deleteLaptop=()=>{
        deleteInfoRest({
            id:laptopRetrieved.id
        },showMessage)
}

    return <View style={styles.container}>
        <Input
            value={marca}
            placeholder="Marca"
            onChangeText={(value) => {
                setMarca(value);
            }}
        />
        <Input
            value={color}
            placeholder="Color"
            onChangeText={(value) => {
                setColor(value);
            }}
        />
        <Input
            value={codigo}
            placeholder="Codigo"
            onChangeText={(value) => {
                setCodigo(value);
            }}
        />
        <Button
            title="Guardar"
            onPress={isNew ? createInfo : updateList}
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