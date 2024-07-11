import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, Text } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();


const FeedScreen = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FeedScreen</Text>
    </View>
}
const NotificationsScreen = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NotificationsScreen</Text>
    </View>
}
const ProfileScreen = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProfileScreen</Text>
    </View>
}
function MyTabs() {
    return null
}

function App() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default App;

