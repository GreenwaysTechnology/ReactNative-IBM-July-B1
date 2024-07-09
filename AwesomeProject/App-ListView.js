import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { produce } from 'immer'

const Posts = props => {
    const [post, setPost] = useState({
        posts: [],
        error: null,
        isLoading: false
    })

    async function fetchPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        try {
            const response = await fetch(url)
            const posts = await response.json()
            setPost(prevState => {
                return produce(prevState, draft => {
                    draft.posts = posts
                    draft.isLoading = true
                    draft.error = prevState.error
                })
            })
        }
        catch (err) {
            setPost(prevState => {
                return produce(prevState, draft => {
                    draft.error = err
                })
            })
        }
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    if (post.error) {
        return <View>
            <Text>Error: {post.error.message}</Text>
        </View>
    } else if (!post.isLoading) {
        return <Text style={{ textAlign: 'center',fontSize:40 }}>
            Loading...
        </Text>
    } else {
        return <View style={{ marginLeft: 50 }}>
            <Text style={{ textAlign: 'center', color: 'red', fontSize: 30 }}>Posts</Text>
            {/* <FlatList data={post.posts} renderItem={(obj) => {
                return <Text style={styles.lable}>
                    {obj.item.title}
                </Text>
            }} /> */}
            {/* <FlatList data={post.posts} renderItem={({ item }) => {
                return <Text style={styles.lable}>
                    {item.title}
                </Text>
            }} /> */}
            <FlatList data={post.posts} keyExtractor={item => item.id}
                renderItem={({ item: { title } }) => {
                    return <Text style={styles.lable}>
                        {title}
                    </Text>
                }} />
        </View>
    }
}

function App() {
    return <View style={styles.container}>
        <Posts />
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
        marginLeft: 5,
        color: 'blue',
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 'bold',
        fontSize: 20
    }
})