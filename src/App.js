//require react to actually be imported into our component :: this gives us JSX support and everything we need from React to get started
import React from 'react';
//import stylesheet into our component
import './App.css';

//this creates a constant function called 'App', which takes no function arguments. Any functional components that we write need to return the JSX that tells react how to create the component. We wrap JSX inside of parentheses.
const App = () => {
  return (<div className="App">Hello World!</div>);
};


export default App;
