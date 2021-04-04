import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { add, deletetask, clear } from "./Redux/action";
import "./sass/main.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import BackspaceIcon from '@material-ui/icons/Backspace';


const App = () => {

  const dispatch = useDispatch()
  const taskArr = useSelector(state => state)

  const [input, setInput] = useState("");

  // dispatch action
  const dispatchAction = (task) => {
    dispatch(add(task));
    setInput("");
  }

  // date function
  const getDate = () => {
    let d = new Date();
    let date = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    return `${date}-${month}-${year}`
  }

  return (
    <div className="App">
      <div className="container">
        {/* TODO FORM */}
        <div className="form">
          <input className="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add Task" />
          <Button onClick={() => dispatchAction(input)}><AddIcon /></Button>
        </div>
        {/******************* TODO APP *****************/}
        <div className="todo_app">
          {/* todo app head */}
          <header className="todo_head">
            <h2 className="date">{getDate()}</h2>
            <h3 className="no_of_tasks">{taskArr.length} Tasks</h3>
          </header>
          {/* todo app body */}
          <main className="todo_body">
            {
              taskArr.map((task, i) => {
                return (
                  <div className="task_div" key={i}>
                    <p className="task">{task}</p>
                    <Button onClick={() => dispatch(deletetask(i))}>
                      <BackspaceIcon className="delete_btn" />
                    </Button>
                  </div>
                )
              })
            }
          </main>
          <footer>
            <Button className="clear_btn" onClick={() => dispatch(clear())} >Clear All</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
