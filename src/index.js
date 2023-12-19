import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import Counter from './App'
import TodoList from './App';


function buttonClick(name) {
  alert('I was clicked by' + name)
}

const element = <button onClick={()=>{buttonClick("Bright")}}>Click me</button>
// function Car() {
//   return <p>This is a car component</p>
// }

// class Car extends React.Component{
//   render() {
//     return(
//       <div>
//         <p style={{color:'red'}}>My name is Bright</p>
//         <p>I am 24 years old</p>
//       </div>
//     )
//   }
// }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<TodoList/>)

