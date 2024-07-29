import { useState, useEffect } from "react";

function App() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch("https://sum-server.100xdevs.com/todos")
            const json = await res.json()
            console.log(json.todos)
            return setTodos(json.todos)
        }
        fetchTodos();
    }, [])

    return (
        <div>
            {todos.map(function (todo) {
                return <Todos key={todo.id} title={todo.title} description={todo.description} />
            })}
        </div>
    )
}
function Todos({ title, description }) {
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default App