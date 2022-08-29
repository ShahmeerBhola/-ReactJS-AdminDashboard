import React, { useEffect, useState } from "react";
import order from "../data/orders.json";
import { Link } from "react-router-dom";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Dashboardsurge = () => {
  const [data,setData]=useState([])
  const [value,setValue]=useState('')
  useEffect(()=>{
    axios.get(`https://theblach.com/api/admin/getAll`)
    .then((res)=>{
      setData(res.data)

    })
    .catch((err)=>{
      console.log("err",err);
    })
  },[])
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.put(`https://theblach.com/api/admin/update`,{basic:value})
    .then((res)=>{
      setValue("")
      getData()

    })
    .catch((err)=>{
      console.log("err",err);
    })
  }
  const vipHandler=(e)=>{
    e.preventDefault();
    axios.put(`https://theblach.com/api/admin/update`,{VIP:value})
    .then((res)=>{
      setValue("")
      getData()

    })
    .catch((err)=>{
      console.log("err",err);
    })
  }

  const getData=()=>{
    axios.get(`https://theblach.com/api/admin/getAll`)
    .then((res)=>{
      setData(res.data)

    })
    .catch((err)=>{
      console.log("err",err);
    })
  }
  return (
    <main>
      <h1>Ticket Types & Price</h1>
      <div className="date">
        <input type="date" />
      </div>

      <div className="insights">
        {/* <!--------------- End of Admission ---------------> */}
        <div className="occupied">
          <span className="material-icons-sharp">bar_chart</span>
          <button style={{marginTop: "5px", marginLeft: "130px", background:"white"}}>    
          <span class="material-icons-sharp" style={{marginTop: "5px", fontSize: "20px", background: "white", color: "rgba(0, 0, 0, 0.54)"}}>
          delete
          </span>
        </button>
          <div className="middle">
            <div className="left">
              <h3>BASIC Access</h3>
              <h1>Rs. {data.length>0&&data[0].basic}</h1>
            </div>
            <div className="progress">
             
              <div className="number">
                <p>90% sales today</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last updated 24 hours ago</small>
          
          <Popup  trigger={<button style={{marginTop: "5px", color:"red", background: "transparent" }}>
                <h5>Change Price</h5>
          </button>} 

     position="right center">
     
     <form onSubmit={submitHandler}>
    <label for="quantity"> Basic Price:</label>
  <input type="number" id="quantity"  onChange={(e)=>{setValue(e.target.value)}} />
  <input type="submit">
  </input>
    </form>
    </Popup>
        </div>
        {/* <!--------------- End of Occupied --------------->                  */}
        <div className="revenue">
          <span className="material-icons-sharp">stacked_line_chart</span>
          <button style={{marginTop: "5px", marginLeft: "130px", background:"white"}}>    
          <span class="material-icons-sharp" style={{marginTop: "5px", fontSize: "20px", background: "white", color: "rgba(0, 0, 0, 0.54)"}}>
          delete
          </span>
        </button>
          <div className="middle">
            <div className="left">
              <h3>VIP Table</h3>
              <h1>Rs. {data.length>0&&data[0].VIP}</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>10% sales today</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last updated 24 hours ago</small>
          <Popup  trigger={<button style={{marginTop: "5px", color:"red", background: "transparent" }}>
                <h5>Change Price</h5>
          </button>} 

     position="right center">
     
     <form onSubmit={vipHandler}>
    <label for="quantity"> Vip Price:</label>
  <input type="number" id="quantity"  onChange={(e)=>{setValue(e.target.value)}} />
  <input type="submit">
  </input>
    </form>
    </Popup>
        </div>

        {/* <!--------------- End of Revenue ---------------> */}
      </div>
      {/* <!--------------- End of Insights ---------------> */}

      <div className="insights">
        {/* <!--------------- End of Admission ---------------> */}
        <div className="admitted">
          <span className="material-icons-sharp">bar_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Predicted BASIC Access</h3>
              <h1>Rs. 3500</h1>
            </div>
            <div className="progress">
             
              <div className="number">
                <p>40% increased demand</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--------------- End of Occupied --------------->                  */}
        
        <div className="admitted">
          <span className="material-icons-sharp">stacked_line_chart</span>
          
          <div className="middle">
            <div className="left">
              <h3>Predicted VIP Table</h3>
              <h1>Rs. 5200</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>120% Inventory Booked</p>
              </div>
              
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
          

        </div>
        {/* <!--------------- End of Revenue ---------------> */}
      </div>

      <Link to="/addticket">

      <button style={{marginTop:"20px", background:"black", width:"100px", height: "40px", fontSize:"20px",textAlign:"center",color:"white",borderRadius:"20px"}}>
        {/* <span className="material-icons-sharp">bar_chart</span> */}
        <div className="">
          <div className="">
            <h3>Add Ticket</h3>
          </div>
        </div>
        {/* <small className="text-muted">Last 24 Hours</small> */}
      </button>

      </Link>

    </main>
  );
};

export default Dashboardsurge;
