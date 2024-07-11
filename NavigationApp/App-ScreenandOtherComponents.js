import { StyleSheet, View, Text, Button, FlatList, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//create Stack Object
const Stack = createNativeStackNavigator()

//Screen
const HomeScreen = (props) => {
    const move = () => {
        props.navigation.navigate('Profile')
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button onPress={move} title="Profile" />
    </View>
}

const Profile = () => {
    const profiles = [{
        id: 1,
        name: 'Subramanian'
    },
    {
        id: 2,
        name: 'Ram'
    }
    ]
    return <View style={{ marginLeft: 50 }}>
        <FlatList data={profiles} keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <TouchableHighlight activeOpacity={0.4}
                    underlayColor={'yellow'}>
                    <Text>{item.name}</Text>
                </TouchableHighlight>
            }} />
    </View>

}
//Screen
const ProfileScreen = (props) => {
    return <View style={styles.container}>
        <Profile />
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