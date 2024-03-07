
import './App.css';
import Form from './Form';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [inputText , setInputText] =useState('');
   const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>Todo list</header>
       <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
       <TodoList/>
    </div>
  );
}

export default App;
