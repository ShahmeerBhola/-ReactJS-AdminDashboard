import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function QRcode() {
  const [details, setDetails] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [redeem, setRedeem] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    setDetails(user);
    axios
      .get(`https://theblach.com/api/user/getUser/${user._id}`)
      .then((res) => {
        console.log(res.data, "res");
        setData(res.data);
        setLoading(true);

        // setData(res.data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("data", data);

  const redeemHandler = async () => {
    await axios
      .put("https://theblach.com/api/user/redeemAll", {
        userId: details._id,
        qrId: data.qr.qrCodeId,
      })
      .then((res) => {
        console.log("dataaaaaa=>", res.data);
        setDetails(res.data);
        localStorage.setItem(JSON.stringify("user", res.data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  console.log("data", data);
  return (
    <div
      className="w-full h-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button
        className=" p-6"
        style={{ margin: "40px 10px", fontSize: "30px" }}
      >
        QR Code
      </button>
      {loading && (
        <>
          <img
            height="200"
            style={{ width: "200px" }}
            src={`https://theblach.com/api/user/getQRCode/${details._id}/${data.qr[0].qrCodeId}`}
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            <p>{data.id}</p>
            <p>{details.name}</p>
            <p>{new Date(data.qr[0].generatedAt).toLocaleString()}</p>
            <p>{details.quantity} person(s)</p>
            <p>{details.paymentType}</p>
            <p>Total: {details.amount - details.redeemedAmount} </p>
          </div>
          {details.amount - details.redeemedAmount !== 0 && (
            <div
              style={{
                padding: "10px 5px",
                fontSize: "24px",
                background: "red",
                marginTop: "25px",
                borderRadius: "10px",
                color: "white",
              }}
              onClick={redeemHandler}
            >
              {" "}
              REDEEM ALL
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default QRcode;
