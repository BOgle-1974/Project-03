import './App.css';
import React from 'react'
export default function todoList({todo, handleDelete}) {

  return (
        todo.map ( todo => {
            return <div key={todo.id}>{todo.desc}<button onClick={() => handleDelete(todo.id)}>Delete</button></div>
      })
  );
}
