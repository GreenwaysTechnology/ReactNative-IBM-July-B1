import { StyleSheet, View, Text } from "react-native";
import { Greeter } from "./src/components/Greeter";

function App() {

    return <View style={styles.container}>
        <Greeter message="Hello" />
        <Greeter message="Hai" />
        <Greeter message="Welcome" />
        <Greeter />
    </View>
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10
    },
    lable: {
        marginLeft: 10,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 'bold',
        fontSize: 40
    }
})