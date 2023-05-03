import React, { useEffect, useState } from "react";

let DigitalWatch=()=>{

    let [state , setState]=useState({
        currentTime : new Date().toLocaleTimeString()
    });

    useEffect(()=>{
      let intervel=  setInterval(()=>{
            setState(()=>({
                currentTime : new Date().toLocaleTimeString()
            }))
        },1000);

        return()=>{
            clearInterval(intervel);
        }

    } ,[]);

    return (
     <React.Fragment>
       <div className="container mt-4">
        <div className="row">
         <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-header bg-warning text-white"> 
             <p className="h3">Digital Watch</p>
            </div>
            <div className="card-body bg-light">
              <h3 className="display-4">{state.currentTime}</h3>
            </div>
          </div>
         </div>
        </div>
       </div>
     </React.Fragment>
    );
}

export default DigitalWatch