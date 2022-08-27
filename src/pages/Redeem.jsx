import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function Redeem() {
    const [check,setCheck]=useState({})
    const[val,setVal]=useState(0)
    const[data,setData]=useState({})
    const [details,setDetails]=useState({})
    const Param=useParams()
    console.log("PARAMS",Param);
    useEffect(()=>{
        axios.get(`https://theblach.com/api/user/getUser/${Param.id}`)
        .then((res)=>{
            setVal(res.data.amount-res.data.redeemedAmount)
        })
        .catch((err)=>{
          console.log(err);
        })
        axios.get("https://theblach.com/api/qr-code")
        .then((res)=>{
          if(res.data.length>0){
            setDetails(res.data.find((x)=>x.userId._id===Param.id))
          }
        })
        .catch((err)=>{
          console.log(err);
        })
        
      },[data])
    const inputHandler=(e)=>{
        setCheck({...check,
            [e.target.name]:e.target.value})
    }
    const submitHandler=()=>{
        const user=JSON.parse(localStorage.getItem("user"))
        axios.put(`https://theblach.com/api/user/redeemAmount`,{...check,userId:Param.id,qrId:Param.ab})
        .then((res)=>{
            console.log(res.data);
            setData(res.data);

        })
        .catch((err)=>{

        })
    }
    const redeemHandler=async()=>{
      await axios.put("https://theblach.com/api/user/redeemAll",{
        userId:Param.id,
        qrId:Param.ab,
      }).then((res)=>{
        setVal(res.data.amount-res.data.redeemedAmount)
        localStorage.setItem(JSON.stringify('user',res.data))
      }).catch((err)=>{
        console.log("err",err);
  
      })
  
    }
  return (
    <>
    {val===0?<div style={{margin: "100px auto", width: "fit-content"}}>
      <h3>The QR is fully redeemed and it can't be redeemed again ! </h3>
    </div>:
    <div style={{display:"flex" ,alignItems:"center",flexDirection:"column", gap:"10px",paddingTop:"60px"}}>
        <h2 style={{fontSize:"30px"}}>{details.id}</h2>
        <h2 style={{fontSize:"30px"}}>Amount</h2>
        <input style={{height:"40px"}} type="text" name="amount" onChange={inputHandler}/>
        <div style={{padding:"10px 20px",background:"green", color:"white", fontSize:"20px"}} onClick={submitHandler}>Submit</div>

        {
            <h2>Remaining Amount : {val}</h2>
        }
        
        <div style={{padding:"10px 5px", fontSize:"24px" ,background:"red",marginTop:"25px",borderRadius:"10px",color:"white"}} onClick={redeemHandler}> REDEEM ALL</div>
        </div>
}
        </>
  )
}

export default Redeem