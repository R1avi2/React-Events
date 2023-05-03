import React, { useState } from "react";

let RegisterForm=()=>{
      
  let [state,setState]=useState({
    user :
    {
        username:'',
        email:'',
        password:'',
        desgnation:'',
        bio:'',
        terms : false
    }
  });

  let {user}=state;

  let updateInput=(event)=>{
    setState((state)=>({
        user:
        {
           ...state.user,
           [event.target.name]:event.target.value
        }
    }))
  }
  let updateCheck=(event)=>{
    setState((state)=>({
        user:
        {
           ...state.user,
           [event.target.name]:event.target.checked
        }
    }))
  }
  
  let submitReg=(event)=>{
    event.preventDefault();
    console.log(user);
  }

    return(
        <React.Fragment>
        <pre>{JSON.stringify(state.user)}</pre>
        <div className="container mt-3">
          <div className="row">
           <div className="col-md-6">
            <div className="card">
             <div className="card-header bg-primary text-white">
              <p className="h3">Register Here</p>
             </div>
             <div className="card-body bg-light">
               <form onSubmit={submitReg}>
                  <div className="mb-3">
                  <input 
                  name="username"
                  value={user.username}
                  onChange={updateInput}
                  type="text" className="form-control" placeholder="UserName"/>
                  </div>
                  <div className="mb-3">
                  <input 
                  name="email"
                  value={user.email}
                  onChange={updateInput}
                  type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div className="mb-3">
                  <input 
                  name="password"
                  value={user.password}
                  onChange={updateInput}
                  type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div className="mb-3">
                  <select
                  name="designation"
                  value={user.desgnation}
                  onChange={updateInput}
                  className="form-control">
                    <option value="">Select Designation</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                  </select>
                  </div>
                  <div className="mb-3">
                  <textarea 
                  name="bio"
                  value={user.bio}
                  onChange={updateInput}
                  className="form-control" placeholder="bio" rows={4}></textarea>
                  </div>
                  <div className="mb-3">
                  <input 
                  name="terms"
                  onChange={updateCheck}
                  type="checkbox" className="form-check-input"/>Accepts Terms
                  </div>
                  <div className="mb-3">
                  <input type="submit" className="btn btn-success btn-sm" value="Register"/>
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

export default RegisterForm