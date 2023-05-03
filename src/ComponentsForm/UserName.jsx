import React, { useState } from "react";

let UserName=()=>{
  
let [state,setState]=useState(
    {
            username:'Jgon' 
       
    }
);

let ubdateInput=(event)=>{
    setState((state)=>({
        username:event.target.value
    }))
}


    return(
        <React.Fragment>
          <div className="container mt-3">
           <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-primary text-bg-white">
                  <p className="h4">UserName</p>
                </div>
                <div className="card-body bg-light">
                  <form>
                    <div className="mb-3">
                       <input  
                       value={state.username}
                       onChange={ubdateInput}
                       type="text" className="form-control" />
                    </div>
                    <h4>{state.username}</h4>
                    
                  </form>
                </div>
              </div>
            </div>
           </div>
          </div>

        </React.Fragment>
    );
}

export default UserName