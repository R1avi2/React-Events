import React, { useEffect, useState } from "react";
import ContactService from "../Services/ContactService";

let ContactList=(props)=>{

     let [state,setState]=useState({
        contacts : []
     });

     
     useEffect(()=>{
      (async()=>{
        try{
          let response=await ContactService.getAllContacts();

          setState(()=>({
            contacts:response.data
          }))
        }catch(error){
           console.log(error);
        }
      })
      ();

     },[]);


     let {contacts}=state;

     let clickContact=(contact)=>{
         
         props.sendContact(contact);
     }

    return(
        <React.Fragment>
          <table className="table table-hover text-center table-striped">
           <thead className="bg-dark text-white">
             <tr>
               <td>SNo</td>
               <td>Name</td>
               <td>Email</td>
               <td>Phone</td>
               <td>Location</td>
             </tr>
           </thead>
           <tbody>
           
              {
                contacts.length>0 &&   contacts.map((contact)=>{
                 return(  <tr key={contact.sno} onClick={()=>clickContact(contact)}>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.website}</td>
                    <td>{contact.address.city}</td>
                    </tr>
                 )
                })
              }
           </tbody>
          </table>
        </React.Fragment>
    );
}

export default ContactList