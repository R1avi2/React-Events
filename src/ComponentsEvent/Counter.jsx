import React, { useState } from 'react';

let Counter=()=>{

    let [state , setState]=useState(
          {
            count : 0
          }
         
    );
    
    let incrCount=()=>{
        setState(state=>({
            count:state.count+1
        }))
    }

    let decrCount=()=>{
        setState(state=>({
            count:state.count-1
        }))
    }
 
    return(
        <React.Fragment>
         <div className='container mt-3'>
          <div className='row'>
          <div className='col-md-4'>
           <div className='card'>
             <div className='card-header bg-primary text-white' >
               <p className='h3'>Counter</p>
             </div>
             <div className='card-body'>
               <h5 className='display-2'>{state.count}</h5>
               <button onClick={incrCount} className='btn btn-success btn-sm mx-1'>Increment</button>
               <button onClick={decrCount} className='btn btn-danger btn-sm mx-1'>Decrement</button>
             </div>
           </div>
          </div>
          </div>
         </div>

        
        </React.Fragment>
    );
}


export default Counter