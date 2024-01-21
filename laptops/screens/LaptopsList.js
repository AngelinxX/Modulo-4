import { View, Text, StyleSheet, FlatList } from "react-native"
import { Button, ListItem } from "@rneui/base"
import { getAllLaptops } from "../rest_client/laptops"
import { useState } from "react"

export const ContactsList = () => {
    const [contactsList, setContactsList] = useState([]);

    const ContactItem = ({ contact }) => {
        return <ListItem>
            <ListItem.Content>
                <ListItem.Title>{contact.Marca} {contact.Color}</ListItem.Title>
                <ListItem.Subtitle>{contact.Codigo}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    }

    fnRefreshList = (contacts) => {
        setContactsList(contacts);
    }
    return <View>
        <Text>LISTA DE CONTACTOS</Text>
        <Button
            title="Consultar"
            onPress={() => {
                getAllLaptops(fnRefreshList);
            }}
        />
        <FlatList
            data={contactsList}
            renderItem={({ item }) => {
                return <ContactItem contact={item} />
            }}
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