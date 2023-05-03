import React, { useState } from "react";

let LoginForm=()=>{

    let [state,setState]=useState({
        user : 
        {
            username :'',
            password :''
        }
    });
    let {user}=state;

    

    let changeInput=(event)=>{
        setState((state)=>({
            user:{
         ...state.user,
       [event.target.name]:event.target.value
            }
        }))
    }

    let submitLogin=(event)=>{
      event.preventDefault();
    console.log(user);
    }

   
    return(
        <React.Fragment>
        <pre>{JSON.stringify(state)}</pre>
          <div className="container mt-3">
           <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header bg-primary text-bg-white">
                  <p className="h4">Login Here</p>
                </div>
                <div className="card-body bg-light">
                  <form onSubmit={submitLogin}>
                    <div className="mb-3">
                       <input 
                       name="username" 
                       value={user.username}
                       onChange={changeInput}
                       type="text" className="form-control" placeholder="username" />
                    </div>
                    <div className="mb-3">
                       <input  
                       name="password"
                       value={user.password}
                       onChange={changeInput}
                       type="password" className="form-control" placeholder="password"/>
                    </div>
                    <div className="mb-3">
                    <input  
                    type="submit" className="btn btn-success btn-sm" value="Login" />
                 </div>


                    
                  </form>
                </div>
              </div>
            </div>
           </div>
          </div>

        </React.Fragment>
    );
}

export default LoginForm