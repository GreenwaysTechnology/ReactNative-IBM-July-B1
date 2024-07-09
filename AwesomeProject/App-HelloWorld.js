import { StyleSheet, Text, View } from "react-native";

function App() {

    return <View style={styles.container}>
        <Text style={styles.lable}>Hello</Text>
        <Text style={{ color: 'blue', fontSize: 30, fontStyle: 'italic' }}>Welcome To React Native</Text>
    </View>
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding:10
    },
    lable: {
        marginLeft:10,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 'bold',
        fontSize: 40
    }
})