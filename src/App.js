import React from "react";
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import {Container} from 'react-bootstrap'


function App() {
const [todo, setTodo] = React.useState([
  {
    id: 1,
    title: 'first todo',
    status: true
  },
  {
    id: 2,
    title: 'second todo',
    status: false
  },
  {
    id: 3,
    title: 'third todo',
    status: true
  }
])
  
  return (
    <Container className="App">
 <Header />
 <AddTodo todo={todo} setTodo={setTodo}/>
 <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
