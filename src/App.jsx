import { useState } from 'react'
import './App.css'

import People from './components/data';
import PersonCard from './components/Card/PersonCard';

function App() {
  const [persons, setPersons] = useState(People);
  // setPersons(Persons);
  
  return (
    <>
      <div className='App'>
        <h1 style={{color:"black", padding:"10px"}}>Person Informations</h1>
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {persons.map(item=>
            <PersonCard name= {item.name}  id ={item.id}blood_group={item.blood_group} role={item.role} access={item.access_to} />
          )}
        </div>
      </div>
      
    </>
  )
}

export default App
        














{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}