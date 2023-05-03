import React, { useState } from "react";

let WishMessage=()=>{
   
    let [state,setState]=useState({
        message:'Hello'
    });

    let sayGm=()=>{
        setState((state)=>({
            message:'Good Morning'
        }))
    }
    let sayGA=(value)=>{
        setState((state)=>({
            message:value
        }))
    }

   return(
    <React.Fragment>
      <div className="container mt-4">
       <div className="row"> 
        <div className="col-md-8">
         <div className="card">
            <div className="card-header bg-primary text-white">
             < p className="h4">Wishmessage</p>
            </div>
            <div className="card-body">
              <h4 className="display-3">{state.message}</h4>
              <button onClick={sayGm} className="btn btn-success btn-sm">Good Mornimg</button>
              <button onClick={()=>sayGA('Good AfterNoon')} className="btn btn-warning btn-sm">Good AfterNoon</button>
              <button onClick={()=>{setState((state)=>({message:'Good Evening'}))}} className="btn btn-danger btn-sm">Good Evening</button>
            </div>
         </div>
        </div>
       </div>
      </div>
    
    </React.Fragment>
   );
}

export default WishMessage
