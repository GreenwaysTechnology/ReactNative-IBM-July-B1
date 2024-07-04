import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TODOS from './mock-data/todos'

const TodoListItem = ({ todo: { id, userId, title, completed } }) => <>
    <h1>{id} - {userId}</h1>
    <h3>{title}</h3>
    <h3>{completed ? "Yes" : "No"}</h3>
</>

const TodoList = ({ todos }) => {
    return <>
        <div>
            {
                todos.map(todo => {
                    return <section key={todo.id}>
                        <TodoListItem todo={todo} />
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
