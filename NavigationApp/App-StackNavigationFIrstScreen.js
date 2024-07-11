import { StyleSheet, View,Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//create Stack Object
const Stack = createNativeStackNavigator()

//Screen
const HomeScreen = () => <View style={styles.container}>
    <Text>Home Screen</Text>
</View>

function App() {

    return <NavigationContainer>
        {/* Navigation type -Stack */}
        <Stack.Navigator>
            {/* Screens  */}
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App;