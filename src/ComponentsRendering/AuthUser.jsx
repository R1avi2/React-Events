import React, { useState } from "react";

let AuthUser=()=>{

    let [state , setState]=useState({
     isLoggedIn :false
    });

    let logIn=()=>{
        setState((state)=>({
            isLoggedIn :true
        }))
    }

    let logOut=()=>{
        setState((state)=>({
            isLoggedIn :false
        }))
    }
    return(
        <React.Fragment>
        <div className="container mt-4">
         <div className="row">
          <div className="col-md-5">
           <div className="card bg-bg-light">
             <div className="card-body bg-light shadow-lg">
             {
                state.isLoggedIn ?
                <p className="h3">Welcome Ravi...</p>:
                <p className="h3">Welcome Guest</p>
             }

             {
                state.isLoggedIn ?
                <button onClick={logOut} className="btn btn-danger btn-sm">LogOut</button>:
                <button onClick={logIn} className="btn btn-success btn-sm">Login</button>
             }
             
             </div>
           </div>
          </div>
         </div>
        </div>

        </React.Fragment>
    );
}
export default AuthUser