import './App.css';
import React from 'react';
import Students from './components/student';
import Subjects from './components/subject';
function App() {
 
  
  return (
    <div className="App">
      <>
     <Students/>
      <br/>
      <br/>
      <br/>
      
      <Subjects/>
     </>
    </div>
  );
}

export default App;
