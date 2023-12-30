import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './newtodo.css'

const NewToDo = (props) => {

  const [todo, setTodo] = useState ({title:'', desc:''});

  const {title, desc} = todo;

  const handleChange = (event) => {

    const name = event.target.name;

    return setTodo ((oldTodo)=>{
        return {...oldTodo, [name]: event.target.value}
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo({title:'', desc:''});
    toast("A new todo has been created")
    
  }


  return (
    <form className='form' onSubmit={handleSubmit} >
      
        <div className='form-field'>
            <label htmlFor='title'>Title: </label>
            <input type='text' name='title' id='title' value={title} onChange={handleChange} required/>
        </div>
        <div className='form-field'>
            <label htmlFor='desc'>Description: </label>
            <textarea type='text' name='desc' id='desc' value={desc} onChange={handleChange}/>
        </div>
        <button type='submit'>Add to list</button>
        
    </form> 
  )
}

export default NewToDo;