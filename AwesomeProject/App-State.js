import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Review = props => {
    const [like, setLike] = useState(0)
    const onLike = () => {
        setLike(like + 1)
    }
    return <>
        <Text style={styles.lable}>Like {like}</Text>
        <Button title="Like" onPress={onLike} />
    </>
}

function App() {
    return <View style={styles.container}>
        <Review />
    </View>
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lable: {
        marginLeft: 10,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 'bold',
        fontSize: 40
    }
})