import { useState } from 'react';

function TaskList() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {

        if (task.trim() === '') return;

        setTasks(prev => [...prev, task.trim()]);
        setTask('');
    };

    const deleteTask = (index) => {

        setTasks(prev =>
            prev.filter((item, i) => i !== index)
        );
    };

    return (
        <div>
            <h2>Task Management</h2>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />

            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;