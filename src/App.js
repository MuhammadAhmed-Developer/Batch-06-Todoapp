import { useState } from 'react';
import './App.css';

function App() {

  // const [inputValue, setinputValue] = useState()

  const handleChange = () =>{

  }

  const handleSubmit = () =>{

  }

  return (
    <div className='main'>
      <div className="container">
        <h1>Todo App</h1>
        <input type="text" value={input} onChange={handleChange} placeholder='Add Item' className='input' />
        <br />
        <br />
        <button className='btn' onClick={handleSubmit}>Add+</button>
        <div className='output-main'>

          <h2 className='item'>Items</h2>
          <div className='output'>

            {output.map((item, i)=>{
                
               <h2 key={i}>{item}</h2>
            })}
            <button className='btn-cross'> X </button>

            </div> 

        </div>
      </div>

    </div>
  );
}

export default App;

