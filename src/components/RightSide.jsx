import axios from "axios";
import React from "react";
import logo from '../images/logo.png'

const RightSide = () => {
  
  // const closedHandler=()=>{
  //   axios.put("https://theblach.com/api/qr-code/closeAll")
  //   .then((res)=>{
  //     alert("successfully");
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
  
  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn">
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Whisky Samba</b>
            </p>
            <small className="text-muted"> Admin</small>
          </div>
          <div className="profile-photo">
            <img src={logo}/>
          </div>
        </div>
      </div>
      {/* <!--------------- End of Top ---------------> */}
      <div className="recent-updates">
        <h2>Notifications</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src={logo}/>
            </div>
            <div className="message">
              <p>
                <b>Special Request</b> WS006 says "I need a Don Julio 1942"
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={logo}/>
            </div>
            <div className="message">
              <p>
                <b>Total amount spent</b> in last hour was Rs. 79,000
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={logo}/>
            </div>
            <div className="message">
              <p>
                <b>Last table</b> was booked 59 minutes ago by WS005
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={logo}/>
            </div>
            <div className="message">
              <p>
                <b>Highest ticket</b> payment tonight was 50,000
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>

        </div>
      </div>
      {/* <!--------------- End of Recent Updates ---------------> */}
      {/* <div onClick={closedHandler} style={{marginTop:"30px" ,background:"red", width:"200px",fontSize:"20px",textAlign:"center",color:"white",borderRadius:"20px",padding:"10px 0px "}}>
        Close Day 
      </div> */}
    </div>
  );
};

export default RightSide;
