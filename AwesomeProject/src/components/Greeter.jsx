import { StyleSheet, Text } from "react-native";

export const Greeter = ({ message = "Greet" }) => <>
    <Text style={styles.lable}>{message}
    </Text>
</>

const styles = StyleSheet.create({
    lable: {
        marginLeft: 10,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 'bold',
        fontSize: 40
    }
})