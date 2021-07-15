import './App.css';
import {TaskProvider} from './Components/TaskContext/TaskContext'
import TaskList from './Components/TaskList/TaskList'
import AddItem from './Components/AddItem/AddItem'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UpdateTask from './Components/UpdateTask/updateTask'
import { Link } from 'react-router-dom'
import ErrorMessage from './Components/Error404/error404'

function App() {
  return (
    <TaskProvider>
      <Router>
    <div className="App">
      
  <Link to={`/AddItem`}>Add Task</Link>
    </div>
<Switch>
  <Route exact path="/updateTask/:id" component={UpdateTask} />
  <Route exact path="/AddItem" component={AddItem} />
  <Route exact path="/" component={TaskList}/>
  <Route path="*" component={ErrorMessage} />
</Switch>

</Router>
    </TaskProvider>
  );
}

export default App;