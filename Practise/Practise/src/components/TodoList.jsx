import { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleSee = (e) => {
        setNewTask(e.target.value);
    };

    const addToList = () => {
        setTodos([...todos, newTask]);
        setCompletedTasks([...completedTasks, false]);
    };

    const removeTodos = (id) => {
        const newlist = todos.filter((_, index) => index !== id);
        setTodos(newlist);
        // const newCompletedTasks = completedTasks.filter((_, index) => index !== id);
        // setCompletedTasks(newCompletedTasks);
    };

    const completeTask = (id) => {
        //  here completed means value

        // imp      for toggling the completed tasks , i am altering the completed based on a condition 
        const newCompletedTasks = completedTasks.map((completed, index) =>
            index === id ? !completed : completed
        );
        setCompletedTasks(newCompletedTasks);
    };

    return (
        <div className='flex flex-col justify-center items-center mt-5'>
            <form
                className="flex border border-slate-200 rounded-xl w-[400px]"
                aria-label="simple-form" onSubmit={(e) => e.preventDefault()} >
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Enter your content"
                        className="w-full p-3 bg-transparent outline-none"
                        onChange={handleSee}
                    />
                </div>
                <button onClick={addToList} className="flex-shrink-0 p-3 font-bold text-white bg-blue-500 rounded-xl">
                    Add
                </button>
            </form>
            <div className='mt-5'>
                {todos.map((task, index) => (
                    <div className='flex gap-x-6 gap-y-10' key={index}>
                        <button onClick={() => removeTodos(index)} className='border text-white bg-black px-4 py-2 rounded-lg'>X</button>
                        <button onClick={() => completeTask(index)}
                            className={`border px-4 py-2 rounded-lg ${completedTasks[index] ? 'bg-green-500' : 'bg-blue-400'}`}
                        >Completed</button>
                        <h1 className={`text-4xl ${completedTasks[index] ? 'text-green-500' : ''}`}>{task}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;