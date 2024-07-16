import React from 'react';
import ItemList from './components/ItemList';
// import Counter from './components/Counter';
// import HelloWorld from './components/HelloWorld';
// import TextInput from './components/TextInput';
// import LoginForm from './components/LoginForm';
// import UncontrolledInput from './components/UncontrolledInput';

const App = () => {
  const colors = ["Rosso", "Giallo", "Verde", "Bianco", "Nero", "Arancione"];

  return (
    <>
      <h1>Title App</h1>
      {/* <HelloWorld /> */}
      {/* <Counter /> */}
      {/* <TextInput /> */}
      {/* <LoginForm /> */}
      {/* <UncontrolledInput /> */}
      <ItemList colors={colors}/>
    </>
  )
}

export default App
