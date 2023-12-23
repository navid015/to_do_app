import React, {useState} from 'react'
import Todos from './Todos'
import NewToDo from './NewToDo'
import {v4 as uuidv4} from 'uuid'
import "./home.css"


const Home = () => {

  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
        setTodos ((previousTodos)=>{
        return [...previousTodos, {id: uuidv4(), todo}]
        
    })
  }

  const handleRomove = (id) => {
    setTodos ((prevTodos)=>{
        const filteredTodos = prevTodos.filter((todo)=>
            todo.id !== id);
        return filteredTodos;
    })
  }

  return (
    <div className='container'>
        <h1 className='heading'>TO DO APP</h1>
        <NewToDo addTodo={addNewTodo}/>
        <Todos todos={todos} onRemove={handleRomove}/>  
    </div>
  )
}

export default Home