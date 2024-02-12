import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Tarefa({ data, deleteItem }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonRemove} onPress={deleteItem}>
                <FontAwesome5 name="trash-alt" size={18} color="#22272e" />
            </TouchableOpacity>
            <Text>{data.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: 'row',

        color: "#22272e",
        marginTop: 12,
        padding: 12,
        borderRadius: 4
    },
    buttonRemove: {
        marginRight: 18
    }
})