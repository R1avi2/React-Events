import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

let ParentComponent=()=>{
    
let [state,setState]=useState({
   channel:'UIBrains',
   author :''
});

let recieveData=(data)=>{
  setState((state)=>({
    ...state,
    author:data
  }))
}

    return(
        <React.Fragment>
          <div className="container mt-3">
           <div className="row">
            <div className="col-md-8">
             <div className="card">
               <div className="card-body bg-primary text-white">
               <p className="h4">Parent Component</p>
               <p className="h5">From Child: {state.author}</p>
               <ChildComponent channel={state.channel} sendData={recieveData}/>
               </div>
             </div>
            </div>
           </div>
          </div>
          <ChildComponent channel={state.channel} sendData={recieveData}/>
        </React.Fragment>
    );

}

export default ParentComponent