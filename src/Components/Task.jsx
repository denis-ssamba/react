import Child from "./Child"
import Parent from "./Parent"
import Table from "./Table"
import TableHeader from "./TableHeader"
import TableRowData from "./TableRowData"
import {useState} from "react"
import './Task.css'
import InputType from "./InputType"

const Task = ()=>{

    const tasks = 
    [
        {id:'1',name:'swimming',completed:false},
        {id:'2',name:'Reading',completed:true},
        {id:'3',name:'Go to Gym',completed:true},
    ]
    const [task,setTask] = useState(tasks)
    const [inputTask, setInputTask] = useState("")

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

    }


return ( <div>
    <h1>Task lists</h1>
    {task.length > 0  && <h2> My Weekly tasks </h2>}
    {
        task.length > 0 ?     <Table>
        <TableHeader/>
        {task.map((data)=> <TableRowData id={data.id} name={data.name} completed={data.completed} />)}
    
        </Table> : <h3> No tasks availabe </h3>
    }

    <form  style={{fontSize:34,color:'red',marginTop:40}} onSubmit={handleTaskSubmission}>
        <InputType label={"Enter Task Name"} id="task-id" value={inputTask} onChange={handleInputChange}/>
        
        <button type="submit" >Save task</button>
        
    </form>

</div>)


}

export default Task

