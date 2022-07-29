import React from 'react'

const Todos = ({todos, doneTodo, removeTodo}) => {
    return todos.map(todo => {
        return (
            <div key = {todo.id} className= {todo.done ?  'todo done' : 'todo'}>
                <span onClick={() => doneTodo(todo.title)}>{todo.title}</span>
                <i className='fas fa-check' onClick={() => doneTodo(todo.title)}></i>
                <i className='fas fa-trash' onClick={() => {removeTodo(todo.title)}}></i>
            </div>
        )
    })
}

export default Todos