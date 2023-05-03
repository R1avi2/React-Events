import React, { useState } from "react";

let ProductItem=()=>{

    let [state,setState]=useState(
        {
          product:
          {
            sno :'AAb12',
            image :'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600',
            name :'Mi watch',
            price : 1500,
            qty :2
          }
        }
    );
    let {product}=state;

    let incrQty=()=>{
        setState((state)=>({
            product:
            {
                ...state.product,
                qty:state.product.qty+1
            }
        }))
    }
    let decrQty=()=>{
        setState((state)=>({
            product:
            {
                ...state.product,
                qty:state.product.qty-1>0 ?state.product.qty-1:1
            }
        }))
    }

  return(
    <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <p className="h2 text-danger">Product Item</p>
              <p>lorem30 is jhgdfghk ghjhg saahskckjdh hgcvmjn hgfcvmjhgvc ghjhgfcvjhgc hfgjhgfcv fhgngcv nghvhbk gghgc hghgc </p>

            </div>
          </div>
        </div>
        <div className="container mt-4">
        <div className="row">
          <div className="col">
           <table className="table table-table-striped text-center table-hover">
             <thead className="bg-dark text-white">
               <tr> 
                  <th>SNo</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>Total</th>
               </tr>
             </thead>
             <tbody>
               <tr>
               <td>{product.sno}</td>
               <td>
                <img src={product.image} alt="" width={'50px'} height={'50px'} />
               </td>
               <td>{product.name}</td>
               <td>{product.price}</td>
               <td>
               <i onClick={decrQty} className="fa fa-minus-square mx-2"/>
               {product.qty}
               <i onClick={incrQty} className="fa fa-plus-square mx-2"/>
               </td>
               <td>{product.qty * product.price}</td>
               </tr>
             </tbody>
           </table>
          </div>
        </div>
      </div>
         


    </React.Fragment>
  );

}

export default ProductItem