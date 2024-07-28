import React from 'react';
// import Counter from './components/Counter';
// import HelloWorld from './components/HelloWorld';
// import TextInput from './components/TextInput';
// import LoginForm from './components/LoginForm';
// import UncontrolledInput from './components/UncontrolledInput';
// import ItemList from './components/ItemList';
// import Card from './components/Card';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

const App = () => {
  // const colors = ["Rosso", "Giallo", "Verde", "Bianco", "Nero", "Arancione"];

  return (
    <>
      {/* <h1>Title App</h1> */}
      {/* <HelloWorld /> */}
      {/* <Counter /> */}
      {/* <TextInput /> */}
      {/* <LoginForm /> */}
      {/* <UncontrolledInput /> */}
      {/* <ItemList colors={colors}/> */}
      {/* <Card>
        <h2>Card title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card> */}
      <TodoProvider>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <TodoList /> */}
      </TodoProvider>
    </>
  )
}

export default App
