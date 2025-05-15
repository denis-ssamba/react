import Child from "./Child";
import Parent from "./Parent";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRowData from "./TableRowData";
import { useState, useEffect } from "react";
import "./Task.css";
import InputType from "./InputType";
import Button from "./Button";
import axios from "axios"; // used for making api calls
import loadingImg from "./loader.gif";
import Rendering from "./Rendering";
//import logo from './logo.svg';

const Task = () => {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(task);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTodo() {
      try {
        // TODO: replace axios with fetch   axios an npm / fetch is javascript native funciton
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        ); // API call
        console.log(data.data);
        if (data.status == 200) {
          setTask(data.data);
          setFilteredTasks(data.data);
          setLoading(false);
        }
      } catch (Error) {
        setError(Error.message);
        setLoading(false);
      }
    }
    fetchTodo();
  }, []);

  useEffect(() => {
    /* const getToDos = sessionStorage.getItem("todo") || []

        if(getToDos.length>0){
        const getToDosObj = JSON.parse(getToDos)

         setTask(getToDosObj)
         setFilteredTasks(getToDosObj)
        }*/
  }, []);

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
    //console.log()
  };

  const handleTaskSubmission = async (event) => {
    event.preventDefault(); // prevent default behaviour, which reload the page.
    //console.log("its submitted")
    //console.log("value of the task", inputTask)
    //const taskEntered = { id:task.length +1,name:inputTask,completed:false}

    const taskObj = { title: inputTask, userId: "10", id: "123" };
    const getPrevioustasks = sessionStorage.getItem("todo");
    const taskObject = JSON.parse(getPrevioustasks);

    if (!getPrevioustasks) {
      // intially when key doesn't exist.
      sessionStorage.setItem("todo", JSON.stringify([taskObj])); // saving todos in localstorage as an array of object
      setTask([taskObj]);
      setFilteredTasks([taskObj]);
      return;
    }
    taskObject.push(taskObj);

    // modifying the state
    setTask(taskObject);
    setFilteredTasks(taskObject);

    sessionStorage.setItem("todo", JSON.stringify(taskObject));
    console.log("previousKey", getPrevioustasks);

    try {
    } catch (Error) {
      console.log("An error has happened", Error.message);
    }

    //console.log("new entered task",taskObj)
    //setTask([...task,taskEntered])

    //setTask((prevTask)=>[...prevTask,taskEntered])
    //setFilteredTasks((prevTask)=>[...prevTask,taskEntered])
  };
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
    const taskFiliterd = task.filter((tsk) => {
      return tsk.title
        .toLowerCase()
        .startsWith(event.target.value.toLowerCase());
    });

    console.log(taskFiliterd);
    setFilteredTasks(taskFiliterd);
  };

  return (
    <div>
      {/*<h1>Task lists</h1>*/}
      {error && (
        <h1 style={{ color: "red" }}>
          {error} contact support or reload the page
        </h1>
      )}
      {loading ? (
        <div className="loader">
          <img src={loadingImg} alt="loading symbol" />{" "}
        </div>
      ) : (
        <>
          {task.length > 0 && <h2> My Weekly tasks </h2>}
          {task.length > 0 ? (
            <Table>
              <TableHeader />
              {filteredTasks.map((data) => (
                <TableRowData
                  id={data.id}
                  title={data.title}
                  completed={data.completed}
                />
              ))}
            </Table>
          ) : (
            <h3> No tasks availabe </h3>
          )}

          <form
            style={{ fontSize: 24, color: "red", marginTop: 40 }}
            onSubmit={handleTaskSubmission}
          >
            <InputType
              label={"Enter Task Name"}
              id="task-id"
              value={inputTask}
              onChange={handleInputChange}
            />
            <InputType
              label={"Search"}
              id="search-id"
              onChange={handleSearchValue}
              value={searchValue}
            />
            <Button type={"submit"} name={"Save task"} />
          </form>
          <Rendering data="Data from parent task" />
        </>
      )}
    </div>
  );
};

export default Task;
