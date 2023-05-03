import React, { useEffect, useState } from "react";
import UserService from "../Services/UserService";

let UserList1=()=>{

    let [state , setState]=useState({
        users : []
    });


    
   useEffect ( ()=>{
    let response={};

      const getData=  async()=>{ 
    try{
         response=await UserService.getAllUser();
           setState(()=>({
            users :response.data
           }));
    }
    catch(error){
          console.log(error);
    }
}
getData();

      return()=>{ 
        response=null
      }
      
      
    },[]);


  
    let {users}=state;
    return(
        <React.Fragment>
         <div className="container mt-4">
          <div className="row">
           <div className="col-md-8">
           
              <p className="h1  text-danger">User List</p>
              <p>This is Spring Boot apllication This is Spring Boot apllication To help Of Doing in React js application To help Of Doing in React js application This is Spring Boot apllication To help Of Doing in React js application</p>
            
           </div>
          </div>
         </div>
         <div className="container mt-4">
         <div className="row">
          <div className="col-md-11">
         <pre>{JSON.stringify(state.users)}</pre>

         <table className="table table-hover text-center table-striped">
         <thead className="bg-dark text-white">
           <tr>
             <td>SNo</td>
             <td>Name</td>
             <td>Email</td>
             <td>Street</td>
             <td>City</td>
             <td>Website</td>
           </tr>
         </thead>
         <tbody>
         
            {
              users.length>0 &&   users.map((contact)=>{
               return(  <tr key={contact.id} >
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.address.street}</td>
                  <td>{contact.address.city}</td>
                  <td>{contact.website}</td>
                  </tr>
               )
              })
            }
         </tbody>
        </table>
            
          </div>
          </div>
         </div>

        </React.Fragment>
    );
}

export default UserList1