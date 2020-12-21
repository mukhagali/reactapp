import './App.css';
import React, { lazy, useEffect, useState } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context'
import empty from './broke.png'
import Modal from './Modal/Modal'
import Loader from './Todo/Loader'

const TodoForm = lazy(() => import('./Todo/TodoForm'))

function App() {
  const [todos, setTodo ] = useState([])
  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(todos => setTimeout(()=> {
        setTodo(todos)
        setLoading(false)
      }, 2000))
  }, [])
  
  const onToggle = id => {
    setTodo(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }
  const removeTodo = (id) => {
    setTodo(todos.filter(todo => todo.id !== id))
  }
  const addTodo = (title) => {
    setTodo(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <Modal />
      <div className="App">
        <h1>This is TodoList</h1>
        <React.Suspense fallback={<Loader />}>
          <TodoForm onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? 
          <TodoList todos={todos} onToggle={onToggle} /> 
        : loading ? null :
          <div className="empty"><img src={empty} alt="" /></div>}
      </div>
    </Context.Provider>
  );
}

export default App;
