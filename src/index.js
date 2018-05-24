import React from 'react';

//This tells javascript that we want the ReactDom library out of the react-dom npm module.
//ReactDOM has one function in particular we want to use :: render(). Render tells React precisely HOW to throw a component into your browser.
import ReactDOM from 'react-dom';

//global css file
import './index.css';

//This tells javascript that we want to import the App component from a local file called App.js. The extension can be left off completely.
import App from './App';

//This allows us to access implementing service workers for progressive web apps in our create react app.
import registerServiceWorker from './registerServiceWorker';

//Now we have our render call. Render is a function that takes two arguments: 1. Which component to render 2. Where to render that component
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
