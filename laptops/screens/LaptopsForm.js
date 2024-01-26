import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveInfoRest } from "../rest_client/laptops";

export const LaptopsForm = ({ navigation }) => {
    const [marca, setMarca] = useState();
    const [color, setColor] = useState();
    const [codigo, setCodigo] = useState();

    const showMessage = () => {
        Alert.alert("CONFIRMACION", "Info laptop agregado")
    }

    const saveInfo = () => {
        console.log("saveInfo");
        navigation.goBack();
        saveInfoRest(
            {
                Marcas: marca,
                Colores: color,
                Codigos: codigo,
            },
            showMessage
        );
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
            onPress={saveInfo}
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