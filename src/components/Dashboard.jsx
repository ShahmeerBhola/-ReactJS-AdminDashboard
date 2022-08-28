import React, { useEffect, useState } from "react";
import axios from "axios";
import order from "../data/orders.json";
import { useNavigate } from "react-router-dom";
import * as moment from "moment";

const Dashboard = () => {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAmount: 0,
    totalRedeemedAmount: 0,
  });
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    const yourDate = new Date();
    const NewDate = moment(new Date()).format("YYYY-MM-DD");
    localStorage.setItem("date", NewDate);
    setDate(NewDate);
    getData();
  }, []);

  useEffect(() => {
    setInterval(function () {
      const date = localStorage.getItem("date");
      axios
        .get(`https://theblach.com/api/user/getUsers/${date}`)
        .then((res) => {
          if (res.data.length > 0) {
            setArr(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10000);
  }, []);

  useEffect(() => {
    getData();
    getStats();
  }, [date]);

  const getData = async () => {
    const date = localStorage.getItem("date");
    await axios
      .get(`https://theblach.com/api/user/getUsers/${date}`)
      .then((res) => {
        getStats();
        if (res.data.length > 0) {
          setArr(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStats = async () => {
    // await axios
    //   .get(`https://theblach.com/api/user/getStats`)
    //   .then((res) => {
    //     setStats(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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

  const inputHandler = (e, id) => {
    axios
      .put("https://theblach.com/api/user/updateStatus", {
        status: e.target.value,
        userId: id,
      })
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const qrHandler = (e, id) => {
    if (e.target.value !== "Cancel") {
      axios
        .put("https://theblach.com/api/user/updateQRStatus", {
          qrStatus: e.target.value,
          userId: id,
        })
        .then((res) => {
          console.log(res);
          getData();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .delete(`https://theblach.com/api/user/cancelQr/${id}`)
        .then((res) => {
          console.log(res, "delete");
          getData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const dateHandler = (e) => {
    const today = e.target.value;
    const NewDate = moment(today).format("YYYY-MM-DD");
    localStorage.setItem("date", NewDate);
    setDate(NewDate);
  };
  const submitHandler = (items) => {
    localStorage.setItem("user", JSON.stringify(items));
    navigate("/qr");
  };
  // console.log(data.find((x)=>x.userId===arr[0]._id).id)
  return (
    <main>
      <h1>Overview</h1>
      <div className="date">
        <input type="date" onChange={dateHandler} value={date} />
      </div>

      <div className="insights">
        <div className="admitted">
          <span className="material-icons-sharp">group</span>
          <div className="middle">
            <div className="left">
              <h3>Total Sales Revenue</h3>
              <h1>Rs. {stats.totalAmount}</h1>
            </div>
            {/* <div className="progress">
              <div className="number">
                <p>81%</p>
              </div>
            </div> */}
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--------------- End of Admission ---------------> */}
        <div className="occupied">
          <span className="material-icons-sharp">bar_chart</span>
          <div className="middle">
            <div className="left">
              <h3>No. of Guests</h3>
              <h1>{stats.totalUsers}</h1>
            </div>
            {/* <div className="progress">
              <div className="number">
                <p>50%</p>
              </div>
            </div> */}
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/* <!--------------- End of Occupied --------------->                  */}
        <div className="revenue">
          <span className="material-icons-sharp">stacked_line_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Total Redemption</h3>
              <h1>Rs. {stats.totalRedeemedAmount}</h1>
            </div>
            {/* <div className="progress">
              <div className="number">
                <p>81%</p>
              </div>
            </div> */}
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>

        {/* <!--------------- End of Revenue ---------------> */}
      </div>
      {/* <!--------------- End of Insights ---------------> */}

      <div className="recent-guest">
        <h2>Guest List</h2>
        <table style={{ fonstSize: "10px !important" }}>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Guest Name</th>
              <th>Guest Number</th>
              <th>Payment</th>
              <th>Redeemed</th>
              <th>Payment Method</th>
              <th>Quantity</th>
              <th>Date and Time</th>
              <th>QR Status</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ fonstSize: "10px !important" }}>
            {arr.length > 0 &&
              arr.map((orderItems, orderIndex) => {
                return (
                  <tr key={orderIndex}>
                    <td>{orderItems.qr.length > 0 && orderItems.qr[0].id}</td>
                    <td>{orderItems.name}</td>
                    <td>{orderItems.contact}</td>
                    <td>{orderItems.amount}</td>
                    <td>{orderItems.redeemedAmount}</td>
                    <td>{orderItems.paymentType}</td>
                    <td>{orderItems.quantity}</td>

                    <td>
                      {orderItems.createdAt.slice(0, 10)}/
                      {orderItems.createdAt.slice(11, 16)}
                    </td>
                    <td>
                      {orderItems.qr.length > 0 && orderItems.qr[0].qrStatus ? (
                        <select
                          className={
                            orderItems.qr[0].qrStatus === "Enabled"
                              ? "danger"
                              : orderItems.qr[0].qrStatus === "Disabled"
                              ? "warning"
                              : "primary"
                          }
                          defaultValue={orderItems.qr[0].qrStatus}
                          onChange={(e) => qrHandler(e, orderItems._id)}
                        >
                          <option className="danger" value="Enabled">
                            Enabled
                          </option>
                          <option className="warning" value="Disabled">
                            Disabled
                          </option>
                          <option className="primary" value="Cancel">
                            Cancel
                          </option>
                        </select>
                      ) : (
                        <h4>Not Generated</h4>
                      )}
                    </td>
                    <td>
                      <select
                        className={
                          orderItems.status === "Approved"
                            ? "danger"
                            : orderItems.status === "pending"
                            ? "warning"
                            : "primary"
                        }
                        defaultValue={orderItems.status}
                        onChange={(e) => inputHandler(e, orderItems._id)}
                      >
                        <option className="danger" value="Approved">
                          Approved
                        </option>
                        <option className="warning" value="pending">
                          pending
                        </option>
                        <option className="primary" value="Completed">
                          Completed
                        </option>
                      </select>
                    </td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => submitHandler(orderItems)}
                    >
                      Show Qr
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    </main>
  );
};

export default Dashboard;
