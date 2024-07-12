import { StyleSheet, View, Text,Button } from 'react-native';
import { useRef, useState, useEffect } from 'react'
import { Video } from 'expo-av';

const MyVidoPlayer = () => {
    const video = useRef(null)
    const [status, setStatus] = useState({})

    return <View>
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View>
            <Button title={status.isPlaying ? 'Pause' : 'Play'} onPress={() => {
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }} />
        </View>
    </View>
}


export default function HomeScreen() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MyVidoPlayer />
    </View>
}

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200
    }
});
