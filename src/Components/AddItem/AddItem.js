import { TaskContext } from "../TaskContext/TaskContext";
import { useContext, useState } from 'react';
import { TaskItem } from "../TaskItem/TaskItem";
import { Redirect } from 'react-router-dom';


const AddItem = () => {

    const [tasks, setTasks] = useContext(TaskContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isCreated, setIsCreated] = useState(false);


    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const AddTask = (e) => {
        e.preventDefault();
        setTasks(prevTasks => [...prevTasks, { name: name, description: description }])
        setIsCreated(true);
    }
    if (isCreated === false) {
        return (
            <div>
                <form onSubmit={AddTask}>
                    <input name="name" onChange={updateName} />
                    <input name="description" onChange={updateDescription} />
                    <button type="submit">Add</button>
                </form>

            </div>

        )
    }
    else{
        return <Redirect to="/" />;
    }
}

export default AddItem