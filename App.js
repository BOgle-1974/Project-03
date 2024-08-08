import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import React, {useState, useRef} from 'react'
import {v4} from 'uuid';
import TodoList from './todoList';
import {addElement, deleteElement, handleChange} from './actions';
function App() {

  const [todo, todoSetter] = useState([]);
  const todoRef = useRef();
  /*********************************************************
   * REDUX 7 Use the useSelector function to get the current
   * state of the variable in the REDUX store
   **********************************************************/
  const elements = useSelector( state => state.elements);

// REDUX 8a: Define an alias for the useDispatch function
const dispatch = useDispatch();

  const handleAdd = () => {
    let todoDesc = todoRef.current.value;
    let element = { id: v4(), desc: todoDesc} 
    dispatch( addElement( element))
  }
  const handleDelete = (id) => {
    let newElements = [...elements]
    let element = newElements.find( element => element.id === id)
    dispatch( deleteElement(element))
  }
  return (
    <div className="App">
      <h2>Brian's React-ToDo App</h2>
      <input ref={todoRef} type="text" />
      <button onClick={handleAdd}>Add</button>
      <TodoList todo={elements} handleDelete={handleDelete}/> 
      </div>
  );

}

export default App;
