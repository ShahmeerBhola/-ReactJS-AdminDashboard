import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { useState } from "react";

const DashboardAddticket = () => {

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <main>
      <h1>Add Ticket</h1>
      

      <div className="insights">
        <div className="admitted">
        <span className="material-icons-sharp">group</span>
        <form onSubmit={handleSubmit}>
      <label>Enter price of ticket:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
    
          <div className="middle">
            <div className="left">
              
            </div>
          </div>
          <label>Enter Name of ticket:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
          </form>
        </div>
      </div>
      


    </main>
  )
          }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
        }
export default DashboardAddticket;
