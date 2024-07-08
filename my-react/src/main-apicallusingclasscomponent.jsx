import React from 'react';
import ReactDOM from 'react-dom/client';
import { produce } from 'immer';
import './index.css'

class Posts extends React.Component {

    state = {
        posts: [], //data
        error: null,
        isLoading: false
    }


    render() {
        const { posts, error, isLoading } = this.state
        if (error) {
            return <div style={{ marginLeft: 50 }}>
                <h1>Error : {error.message}</h1>
            </div>
        } else if (!isLoading) {
            return <h1 style={{ textAlign: 'center' }}>🛴</h1>
        } else {
            return <div style={{ marginLeft: 50 }}>
                <h1>Posts</h1>
                <hr />
                <ul>
                    {posts.map(post => {
                        return <li>{post.title}</li>
                    })}
                </ul>
            </div>

        }
    }
    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        try {
            const response = await fetch(url)
            const posts = await response.json()
            console.log(posts)
            this.setState(previousState => {
                return produce(previousState, draft => {
                    draft.posts = posts
                    draft.isLoading = true
                    draft.error = previousState.error
                })
            })
        }
        catch (err) {
            this.setState(previousState => {
                return produce(previousState, draft => {
                    draft.error = err
                })
            })
        }
    }


}


const App = () => {
    return <>
        <Posts />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
