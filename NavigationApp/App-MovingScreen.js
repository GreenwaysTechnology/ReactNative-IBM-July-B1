import { StyleSheet, View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//create Stack Object
const Stack = createNativeStackNavigator()

//Screen
const HomeScreen = (props) => {
    console.log(props)

    const move = () => {
        props.navigation.navigate('Profile')
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button onPress={move} title="Profile" />
    </View>
}
//Screen
const ProfileScreen = (props) => {
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>
}

function App() {

    return <NavigationContainer>
        {/* Navigation type -Stack */}
        <Stack.Navigator>
            {/* Screens  */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
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