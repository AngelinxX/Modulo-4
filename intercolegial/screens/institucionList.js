import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, ListItem, FAB } from "@rneui/base";
import { getAllInstitucion } from "../rest_client/institucion";
import { useState } from "react";

export const InstitucionList = ({ navigation }) => {
    const [institucionList, setInstitucionList] = useState([]);

    const InstitucionItem = ({ institucion }) => {
        return <ListItem>
            <ListItem.Content>
                <ListItem.Title>{institucion.nombre}</ListItem.Title>
                <ListItem.Subtitle>{institucion.aime}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    }

    fnRefreshList = (school) => {
        setInstitucionList(school)
    }
    return <View style={styles.container}>
        <Text>Lista de Instituciones</Text>
        <Button
            title="Consultar"
            onPress={() => {
                getAllInstitucion(fnRefreshList);
            }}
        />
        <FlatList
            data={institucionList}
            renderItem={({ item }) => {
                return <InstitucionItem institucion={item} />
            }}
        />
        <FAB
            title="+"
            onPress={() => { navigation.navigate("institucionFormNav") }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});