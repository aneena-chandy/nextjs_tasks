import React, { useState } from "react";

function TodoApp() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Add a new task
    const handleAddTask = (event) => {
        event.preventDefault();

        const trimmedTask = task.trim();

        if (!trimmedTask) {
            return;
        }

        const newTask = {
            id: Date.now(),
            title: trimmedTask,
        };

        setTasks((previousTasks) => [
            ...previousTasks,
            newTask,
        ]);

        setTask("");
    };

    // Delete an individual task
    const handleDeleteTask = (id) => {
        setTasks((previousTasks) =>
            previousTasks.filter((item) => item.id !== id)
        );
    };

    return (
        <div className="todo-app">
            <h2>Mini Todo Application</h2>

            {/* Add Task Form */}
            <form onSubmit={handleAddTask} className="todo-form">
                <input
                    type="text"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    placeholder="Enter a new task..."
                />

                <button type="submit">Add Task</button>
            </form>

            {/* Total Task Count */}
            <div className="todo-count">
                Total Tasks: <strong>{tasks.length}</strong>
            </div>

            {/* Display Tasks */}
            {tasks.length === 0 ? (
                <p className="no-tasks">No tasks available</p>
            ) : (
                <ul className="todo-list">
                    {tasks.map((item) => (
                        <li key={item.id} className="todo-item">
                            <span>{item.title}</span>

                            <button
                                type="button"
                                onClick={() => handleDeleteTask(item.id)}
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoApp;