import React from 'react'
import "./todo.css"

const Todo = (props) => {

  const {title, desc}= props.todo;
  const {id} = props;

  const handleClick = (id)=>{
    props.onRemove(id);
  }
  return (
    <article className='todo'>
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <div>
            <button className='button' onClick={()=>{
                handleClick(id);
            }}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </article>
  )
}

export default Todo