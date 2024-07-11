import { StyleSheet, View, Text, Button, FlatList, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//create Stack Object
const Stack = createNativeStackNavigator()

//Screen
const HomeScreen = (props) => {

    const move = () => {
        //passing data from HomeScreen to Profile Screen
        const data = [{ id: 1, name: 'Subramanian' }, { id: 2, name: 'Ram' }]
        //props.navigation.navigate('Profile', { data:data })
        props.navigation.navigate('Profile', { data })
        // props.navigation.navigate('Profile')
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button onPress={move} title="Profile" />
    </View>
}

//Screen
const ProfileScreen = (props) => {
    const profiles = props.route.params.data
    console.log(profiles)
    return <View style={styles.container}>
        <FlatList data={profiles} keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <TouchableHighlight activeOpacity={0.4}
                    underlayColor={'yellow'}>
                    <Text style={{ color: 'red', fontSize: 20 }}>Name: {item.name}</Text>
                </TouchableHighlight>
            }} />
    </View>
}

function App() {

    return <NavigationContainer>
        {/* Navigation type -Stack */}
        <Stack.Navigator>
            {/* Screens  */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" initialParams={{ data: [{ id: 1, name: 'bar' }] }} component={ProfileScreen} />
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