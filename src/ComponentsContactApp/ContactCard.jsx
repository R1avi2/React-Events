import React from "react";

let ContactCard=(props)=>{
 
    let {selectedContact}=props;
    return(
        <React.Fragment>
        <pre>{JSON.stringify(props.selectedContact)}</pre>
         <div className="card mt-3">
          <div className="card-body">
            <ul>
                <li>
                  <tr>{selectedContact.sno}</tr>
                  </li>
                  <li>
                  <tr>{selectedContact.name}</tr>
                  </li>
                  <li>
                  <tr>{selectedContact.email}</tr>
                  </li>
                  <li>
                  <tr>{selectedContact.phone}</tr>
                  </li>
                  <li>
                  <tr>{selectedContact.location}</tr>
                </li>
            </ul>
          </div>
         </div>
        </React.Fragment>
    );
}

export default ContactCard