import Child from "./Child"
import Parent from "./Parent"
import Table from "./Table"
import TableHeader from "./TableHeader"
import TableRowData from "./TableRowData"
import {useState,useEffect} from "react"
import './Task.css'
import InputType from "./InputType"
import Button from "./Button"
import axios from 'axios' // used for making api calls

const Task = ()=>{

    useEffect(()=>{
        async function fetchTodo(){
          const data = await  axios.get("https://jsonplaceholder.typicode.com/todos"); // API call
          console.log(data.data)
          setTask(data.data)
          setFilteredTasks(data.data)
        }
        fetchTodo();
    },[])

    const [task,setTask] = useState([])
    const [inputTask, setInputTask] = useState("")
    const [searchValue,setSearchValue] = useState("")
    const [filteredTasks,setFilteredTasks] = useState(task)

    const handleInputChange = (event)=>{
        setInputTask(event.target.value)
        //console.log()
    }
    
    const handleTaskSubmission = (event)=>{
        event.preventDefault(); // prevent default behaviour, which reload the page. 
        //console.log("its submitted")
        //console.log("value of the task", inputTask)
        const taskEntered = { id:task.length +1,name:inputTask,completed:false}

        console.log("new entered task",taskEntered)
        //setTask([...task,taskEntered])

        setTask((prevTask)=>[...prevTask,taskEntered])
        setFilteredTasks((prevTask)=>[...prevTask,taskEntered])

    }
const handleSearchValue = (event)=>{
    setSearchValue(event.target.value)
   const taskFiliterd =  task.filter((tsk)=>{
   return  tsk.title.toLowerCase().startsWith(event.target.value.toLowerCase()) 


   })





   console.log(taskFiliterd)
   setFilteredTasks(taskFiliterd)
}

return ( <div>
    <h1>Task lists</h1>
    {task.length > 0  && <h2> My Weekly tasks </h2>}
    {
        task.length > 0 ?     <Table>
        <TableHeader/>
        {filteredTasks.map((data)=> <TableRowData id={data.id} title={data.title} completed={data.completed} />)}
    
        </Table> : <h3> No tasks availabe </h3>
    }

    <form  style={{fontSize:24,color:'red',marginTop:40}} onSubmit={handleTaskSubmission}>
        <InputType label={"Enter Task Name"} id="task-id" value={inputTask} onChange={handleInputChange}/>
        <InputType label={"Search"} id="search-id" onChange={handleSearchValue} value={searchValue}/>
        <Button type={'submit'} name={'Save task'}/>
    </form>

</div>)


}

export default Task

