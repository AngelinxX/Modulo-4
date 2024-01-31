import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllLaptops } from "../rest_client/laptops"
import { useState, useEffect } from "react"

export const LaptopsList = ({ navigation }) => {
    const [contactsList, setContactsList] = useState([]);

    useEffect(()=>{
        console.log("Ejecuto la funcion del use effect");
        getAllLaptops(fnRefreshList);
    },[]);

    const ContactItem = ({ contact }) => {
        return <TouchableHighlight onPress={() => {
            navigation.navigate("IngresoLaptops", { listParam: contact });
        }}>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{contact.Marca} {contact.Color}</ListItem.Title>
                    <ListItem.Subtitle>{contact.Codigo}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableHighlight>
    }

    fnRefreshList = (contacts) => {
        setContactsList(contacts);
    }
    return <View style={styles.container}>
        <Text>LISTA DE LAPTOPS</Text>
        <FlatList
            data={contactsList}
            renderItem={({ item }) => {
                return <ContactItem contact={item} />
            }}
        />
        <FAB
            title="+"
            onPress={() => { navigation.navigate("IngresoLaptops",{}) }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',//principal eje vertical
        alignItems: 'stretch',//secundario
        justifyContent: 'flex-start',//jp
    },
});