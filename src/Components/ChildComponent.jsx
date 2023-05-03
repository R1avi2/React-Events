import React, { useState } from "react";

let ChildComponent=(props)=>{
     
let [state ,setState]=useState({

    author:'Naveen'
});

let clickBtn=()=>{
props.sendData(state.author);
}

 
    return(
        <React.Fragment>
          <div className="container mt-3">
           <div className="row">
            <div className="col-md-8">
             <div className="card">
               <div className="card-body bg-warning text-dark">
               <p className="h4">Child Component</p>
               <p className="h5">{props.channel}</p>
               <button onClick={clickBtn} className="btn btn-success btn-sm">Send</button>
               </div>
             </div>
            </div>
           </div>
          </div>
        </React.Fragment>
    );

}

export default ChildComponent