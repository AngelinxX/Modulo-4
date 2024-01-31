import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllContacts } from "../rest_client/contactos"
import { useState, useEffect } from "react"

export const ContactsList = ({ navigation }) => {
    const [contactsList, setContactsList] = useState([]);

    useEffect(()=>{
        console.log("Ejecuto la funcion del use effect");
        getAllContacts(fnRefreshList);
    },[]);
    const ContactItem = ({ contact }) => {
        return <TouchableHighlight onPress={() => {
            navigation.navigate("ContactsFormNav", { contactParam: contact });
        }}>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
                    <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableHighlight>
    }

    fnRefreshList = (contacts) => {
        setContactsList(contacts);
    }
    return <View style={styles.container}>
        <Text>LISTA DE CONTACTOS</Text>
        <FlatList
            data={contactsList}
            renderItem={({ item }) => {
                return <ContactItem contact={item} />
            }}
        />
        <FAB
            title="+"
            onPress={() => { navigation.navigate("ContactsFormNav",{}) }}
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