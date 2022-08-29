import React from "react";
import order from "../data/orders.json";

const Dashboardrevenue = () => {

  const closedHandler=()=>{
    axios.put("https://theblach.com/api/qr-code/closeAll")
    .then((res)=>{
      alert("Day closed succesfully");
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return (
    <main >
      <div className="py-10"><h1>Revenue</h1></div>
      
      <div className="date">
        <input type="date" />
      </div>

      <div className="insights">
        <div className="occupied">
          <span className="material-icons-sharp">currency_rupee</span>
          <div className="middle">
            <div className="left">
              <h3>Total Sales</h3>
              <h1>Rs. 4,50,000</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--------------- End of Sales ---------------> */}
        <div className="occupied">
          <span className="material-icons-sharp">groups</span>
          <div className="middle">
            <div className="left">
              <h3>Total Guests</h3>
              <h1>213 Person(s)</h1>
            </div>
            <div className="progress">
              
              <div className="number">
                <p>50%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--------------- End of Admissions --------------->                  */}
        <div className="occupied">
          <span className="material-icons-sharp">paid</span>
          <div className="middle">
            <div className="left">
              <h3>Avg. Per Bill</h3>
              <h1>Rs. 3,500.89</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>21%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        
        {/* <!--------------- End of APB ---------------> */}
      </div>
      {/* <!--------------- End of First Row Insights ---------------> */}

      <div className="insights">
        <div className="admitted">
          <span className="material-icons-sharp">restaurant</span>
          <div className="middle">
            <div className="left">
              <h3>Total Costs</h3>
              <h1>Rs. 3,50,980</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>85%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--------------- End of Admission ---------------> */}
        <div className="middle">
          <span className="material-icons-sharp">online_prediction</span>
          <div className="middle">
            <div className="left">
              <h3>Predicted Demand</h3>
              <h1>250 Person(s)</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p></p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--------------- End of Occupied --------------->                  */}
        <div className="middle">
          <span className="material-icons-sharp">stacked_line_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Predicted Avg. Per Bill</h3>
              <h1>Rs. 4,000</h1>
            </div>
            <div className="progress">
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        
        {/* <!--------------- End of Revenue ---------------> */}
      </div>

      <div onClick={closedHandler} style={{marginTop:"30px", background:"red", width:"200px",fontSize:"20px", itemsAlign: "center", textAlign:"center",color:"white",borderRadius:"20px",padding:"10px 0px "}}>
        Close Day 
      </div>


    </main>
  );
};

export default Dashboardrevenue;
