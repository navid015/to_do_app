import React from 'react'
import Todo from './Todo'
import "./todos.css"

const Todos = (props) => {
  return (
    <section className='todos'>
        {props.todos.map((todo) => <Todo key={todo.id} id={todo.id} todo={todo.todo} onRemove={props.onRemove}/>)}
    </section>
  )
}

export default Todos