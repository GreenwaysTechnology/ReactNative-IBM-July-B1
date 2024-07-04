import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TODOS from './mock-data/todos'

const TodoList = ({ todos }) => {
    return <>
        <div>
            {
                todos.map(todo => {
                    return <section key={todo.id}>
                        <h1>{todo.id} - {todo.userId}</h1>
                        <h3>{todo.title}</h3>
                        <h3>{todo.completed ? "Yes" : "No"}</h3>
                    </section>
                })
            }
        </div>
    </>
}


const App = () => {
    return <>
        <TodoList todos={TODOS} />
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
