import { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setinputValue] = useState('')
  const [output, setOutput] = useState([])

  const handleChange = (event) =>{
       setinputValue(event.target.value)
  }

  const handleSubmit = () =>{
    if(inputValue.trim() !== ''){       
      setOutput((itemlist)=> [...itemlist, inputValue]
      )
      setinputValue('')
    }
     console.log(inputValue)
  }

  const handleDelete = (index) =>{
    setOutput((itemlist) => itemlist.filter((_, i) => i !== index));
  }

  return (
    <div className='main'>
      <div className="container">
        <h1>Todo App</h1>
        <input type="text" value={inputValue}  onChange={handleChange} placeholder='Add Item' className='input' />
        <br />
        <br />
        <button className='btn' onClick={handleSubmit}>Add+</button>
        <div className='output-main'>

          <h2 className='item'>Items</h2>
          <div className='output'>
            
            <div className='output'>
           {output?.map((item, index)=>{
            return <p key={index}>{item}
            <button className='btn-cross' onClick={()=>handleDelete(index)}> X </button></p>
            
            
                      
          })}

            </div> 
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;

