import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

const MyLocation = () => {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg("Permission Denined to access location")
      return
    }
    let location = await Location.getCurrentPositionAsync({})
    setLocation(location)
  }

  useEffect(() => {
    getLocation()
  }, [])

  let text = 'Getting location...'

  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }

  return <View>
    <Text style={{ fontSize: 20, color: 'blue' }}>{text}</Text>
  </View>

}


export default function HomeScreen() {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Location</Text>
    <MyLocation />
  </View>
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
