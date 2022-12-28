import React, { useState } from 'react'
import TextContainer from './component/TextContainer';
import Todo from './component/Todo'
import './App.css';

function App() {
  return (
    <div>
      <div className='bgImge'>
      </div>
      <div className='container'>
        <Todo />
      </div>
    </div>
  );
}

export default App;