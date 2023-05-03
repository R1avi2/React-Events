import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

let ContactApp=()=>{

  let  [state,setState]=useState({
  selectedContact:{}
  });

  let {selectedContact}=state;

  let receiveContact=(contact)=>{
      setState((state)=>({
        selectedContact:contact
      }))
  }

    return(
        <React.Fragment>
        <pre>{JSON.stringify(selectedContact)}</pre>
          <div className="container mt-4">
           <div className="row">
            <div className="col">
              <p className="h2 text-success">Contact App</p>
               <p>This is Spring Boot apllication This is Spring Boot apllication To help Of Doing in React js application To help Of Doing in React js application This is Spring Boot apllication To help Of Doing in React js application</p>
            </div>
           </div>
          </div>
          <div className="container mt-3">
           <div className="row">
           
            <div className="col-md-9">
            <ContactList sendContact={receiveContact}/>
            </div>

            <div className="col-md-3">
              <ContactCard selectedContact={selectedContact}/>
            </div>

           </div>
          </div>
        </React.Fragment>
    );

}

export default ContactApp