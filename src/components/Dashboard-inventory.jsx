import React from "react";
import order from "../data/orders.json";

const Dashboardinventory = () => {
  return (
    <main>
      <h1>Inventory</h1>
      <div className="date">
        <input type="date" />
      </div>

      <div className="insights">
        <div className="admitted">
          <span className="material-icons-sharp">group</span>
          <div className="middle">
            <div className="left">
              <h3>No. of Guests Admitted</h3>
              <h1>120</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>90% </p>
              </div>
            </div>
          </div>
          <small className="text-muted">Inventory Available: 20</small>
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
        {/* <!--------------- End of Occupied --------------->                  */}
        
        
        {/* <!--------------- End of Revenue ---------------> */}
      </div>
      {/* <!--------------- End of Insights ---------------> */}

      <button style={{margin:"10px", marginTop: "20px", background:"red", width:"200px", height: "50px", fontSize:"22px",textAlign:"center",color:"white",borderRadius:"20px"}}>
        {/* <span className="material-icons-sharp">bar_chart</span> */}
        <div className="">
          <div className="">
            <h3>Change Inventory Limit</h3>
          </div>
        </div>
        {/* <small className="text-muted">Last 24 Hours</small> */}
      </button>
      <button style={{margin:"10px", background:"green", width:"200px", height: "50px", fontSize:"22px",textAlign:"center",color:"white",borderRadius:"20px"}}>
        {/* <span className="material-icons-sharp">bar_chart</span> */}
        <div className="">
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
