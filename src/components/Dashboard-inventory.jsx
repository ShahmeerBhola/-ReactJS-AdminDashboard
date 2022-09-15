import React, { useEffect, useState } from "react";
import order from "../data/orders.json";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import * as moment from "moment";

const Dashboardinventory = () => {
  const [data,setData]=useState([])
  const [value,setValue]=useState('')
  const [date, setDate] = useState();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAmount: 0,
    totalRedeemedAmount: 0,
  });

  useEffect(async()=>{
    await axios.get(`https://theblach.com/api/admin/getAll`)
    .then((res)=>{
      setData(res.data)

    })
    .catch((err)=>{
      console.log("err",err);
    })
    const date = localStorage.getItem("date");
    try {
      const { data } = await axios.get(
        `https://theblach.com/api/user/getStats/${date}`
      );
      setStats(data);
    } catch (err) {
      console.log(err);
    }
  },[])
  const inventoryHandler=(e)=>{
    e.preventDefault();
    axios.put(`https://theblach.com/api/admin/update`,{inventory:value})
    .then((res)=>{
      setValue("")
      getData()

    })
    .catch((err)=>{
      console.log("err",err);
    })
  }

  const getData=async()=>{
   await axios.get(`https://theblach.com/api/admin/getAll`)
    .then((res)=>{
      setData(res.data)

    })
    .catch((err)=>{
      console.log("err",err);
    })
  }

  useEffect(() => {
    const yourDate = new Date();
    const NewDate = moment(new Date()).format("YYYY-MM-DD");
    localStorage.setItem("date", NewDate);
    setDate(NewDate);
    getData();
  }, []);
  useEffect(() => {
    getData();
    getStats();
  }, [date]);
  
  const getStats = async () => {
    const date = localStorage.getItem("date");

    try {
      const { data } = await axios.get(
        `https://theblach.com/api/user/getStats/${date}`
      );
      setStats(data);
    } catch (err) {
      console.log(err);
    }
  };

  const dateHandler = (e) => {
    const today = e.target.value;
    const NewDate = moment(today).format("YYYY-MM-DD");
    localStorage.setItem("date", NewDate);
    setDate(NewDate);
  };
  return (

    
    <main>
      <h1>Inventory</h1>
      <div className="date">
        <input type="date" onChange={dateHandler} value={date} />
      </div>

      <div className="insights">
        <div className="admitted">
          <span className="material-icons-sharp">group</span>
          <div className="middle">
            <div className="left">
              <h3>No. of Guests Admitted</h3>
              <h1>{stats.totalUsers}</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>90% </p>
              </div>
            </div>
          </div>
          <small className="text-muted">Inventory Available: {data.length>0&&data[0].inventory-stats.totalUsers}</small>
        </div>
        {/* <!--------------- End of Admission ---------------> */}
        <div className="occupied">
          <span className="material-icons-sharp">bar_chart</span>
          <div className="middle">
            <div className="left">
              <h3>No. of Tables Sold</h3>
              <h1>20</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>99%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Tables Available: 1</small>
        </div>
        
      {/* <!--------------- End of Revenue ---------------> */}
      </div>
      {/* <!--------------- End of Insights ---------------> */}

      <Popup  trigger={<button class="open-button" style={{background:"red"}}> Change inventory </button>} 
     position="right center">
     <div><h3>Current inventory: {data.length>0&&data[0].inventory}</h3></div>
     <form onSubmit={inventoryHandler}>
    <label for="quantity"> Quantity:</label>
  <input type="number" id="quantity" name="quantity"onChange={(e)=>{setValue(e.target.value)}} />
  <input type="submit">
  </input>
    </form>
    </Popup>

      <button className= "open-button" style={{background:"green", marginLeft: "20px" , marginTop: "20px"}}>
        {/* <span className="material-icons-sharp">bar_chart</span> */}
        <div >
          <div className="">
            <h3>Change Tables Available</h3>
          </div>
        </div>
        {/* <small className="text-muted">Last 24 Hours</small> */}
      </button>
    </main>
  );
};

export default Dashboardinventory;
