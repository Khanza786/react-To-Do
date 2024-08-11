import React, { useState } from 'react';

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim()){
            setTasks(t=>[...t, newTask]);
            setNewTask("")
        }
    }
    function deleteTask(idx){
        const updatedTasks = tasks.filter((ele, i)=> i !== idx)//first find and match the given index
        setTasks(updatedTasks);
    }
    function moveUp(idx){
        if(idx > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[idx],updatedTasks[idx-1]] = [updatedTasks[idx-1],updatedTasks[idx]]
            setTasks(updatedTasks)
        }
    }
    function moveDown(idx){
        if(idx < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[idx],updatedTasks[idx+1]] = [updatedTasks[idx+1],updatedTasks[idx]]
            setTasks(updatedTasks)
        }
    }
    return(<>
        <div className="to-do-div">
            <h1>todo</h1>
            <div>
                <input
                    type="text"
                    placeholder="EnterNewTask..."
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
                
            </div>
            <ol>
                {tasks.map((element, index)=>{
                    return <li key={index}>
                        <span className="text">{element}</span>
                        <button className="delete-button" onClick={function (){
                            return deleteTask(index)}}>Delete</button>
                        <button className="moveup-button" onClick={function (){
                            return moveUp(index)}}>☝</button> 
                        <button className="movedown-button" onClick={function (){
                            return moveDown(index)}}>👇</button>    
                    </li>
                    })}
            </ol>
        </div>
    </>)
}
export default ToDoList