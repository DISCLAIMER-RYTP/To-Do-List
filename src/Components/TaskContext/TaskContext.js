import { createContext, useState } from 'react';


export const TaskContext = createContext();

export const TaskProvider = (props) => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Shop",
            description: "To buy a milk"
        },
        {
            id: 2,
            name: "STEP",
            description: "To do my homework"
        },
        {
            id: 3,
            name: "Stroyka",
            description: "To building home for president"
        }
    ]);

    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    );
}