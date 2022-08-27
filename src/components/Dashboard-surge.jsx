import React from "react";
import order from "../data/orders.json";

const Dashboardsurge = () => {
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
          <div className="middle">
            <div className="left">
              <h3>BASIC Access</h3>
              <h1>Rs. 2500</h1>
            </div>
            <div className="progress">
             
              <div className="number">
                <p>90% sales today</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last updated 24 hours ago</small>
          <button style={{marginTop: "5px", color:"red", background: "transparent" }}>
                <h5>Change Price</h5>
          </button>
        </div>
        {/* <!--------------- End of Occupied --------------->                  */}
        <div className="revenue">
          <span className="material-icons-sharp">stacked_line_chart</span>
          <div className="middle">
            <div className="left">
              <h3>VIP Table</h3>
              <h1>Rs. 5000</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>10% sales today</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last updated 24 hours ago</small>
          <button style={{marginTop: "5px", color:"red", background: "transparent" }}>
                <h5>Change Price</h5>
          </button>
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

      <button style={{marginTop:"20px", background:"black", width:"100px", height: "40px", fontSize:"20px",textAlign:"center",color:"white",borderRadius:"20px"}}>
        {/* <span className="material-icons-sharp">bar_chart</span> */}
        <div className="">
          <div className="">
            <h3>Add Ticket</h3>
          </div>
        </div>
        {/* <small className="text-muted">Last 24 Hours</small> */}
      </button>

      <button style={{margin:"10px" ,background:"red", width:"100px", height: "40px", fontSize:"20px",textAlign:"center",color:"white",borderRadius:"20px"}}>
        {/* <span className="material-icons-sharp">bar_chart</span> */}
        <div className="">
          <div className="">
            <h3>Delete Ticket</h3>
          </div>
        </div>
        {/* <small className="text-muted">Last 24 Hours</small> */}
      </button>

      

    </main>
  );
};

export default Dashboardsurge;
