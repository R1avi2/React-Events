import React, { useState } from "react";

let ShopingCard=()=>{

    let [state ,setState]=useState(
        {
            products :
            [
                {
                    sno : 'A101',
                    image : 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name : 'Mi watch',
                    price : 1700,
                    qty : 2
                },
                {
                    sno : 'A102',
                    image : 'https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name : 'Dell watch',
                    price : 16000,
                    qty : 3
                },
                {
                    sno : 'A103',
                    image : 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name : 'Lenova watch',
                    price : 50000,
                    qty : 1
                }
            ]
        }
    );
    let {products}=state;
     
    let inceQty=(productId)=>{
        let items=products.map(product=>{
            if(product.sno===productId){
                return{
                    ...product,
                    qty:product.qty+1
                }
            }
            return product
        })
    setState((state)=>({
        products: [...items]
    }))
}

let deceQty=(productId)=>{
    let items=products.map(product=>{
        if(product.sno===productId){
            return{
                ...product,
                qty:product.qty-1>0?product.qty-1:1
            }
        }
        return product
    })
setState((state)=>({
    products: [...items]
}))
}


let grandTotal=()=>{
    let total=0
      
    for(let product of products){
        total +=product.price*product.qty;
    }
    return total
}

    return(
        <React.Fragment>
           <div className="container mt-4">
            <div className="row">
               <div className="col">
                  <p className="h1 text-danger">Shoping Cart</p>
                  <p>This is React Js apllication Created by Ravi apllication In done in shoping card to help sucees of our js file in walk in xocomp</p>
               </div>
            </div>
           </div>
            
        <div className="container mt-4">
           <div className="row">
              <div className="col">
                <table className="table table-striped text-center table-hover">
                  <thead className="bg-dark text-white">
                   <tr>
                     <td>SNO</td>
                     <td>Image</td>
                     <td>Name</td>
                     <td>Price</td>
                     <td>Quantiyt</td>
                     <td>Total</td>
                   </tr>
                  </thead>
                  <tbody>
                      {
                        products.map((product)=>{
                            return(
                                <tr key={product.sno}>
                                 <td>{product.sno}</td>
                                   <td>
                                   <img src={product.image} alt="" width={"50px"} height={"50px"}/>
                                   </td>
                                   <td>{product.name}</td>
                                   <td>{product.price.toFixed(2)}</td>
                                   <td>
                                   <i onClick={()=>{deceQty(product.sno)}} className="fa fa-minus-square mx-2" />
                                   {product.qty}
                                   <i onClick={()=>inceQty(product.sno)} className="fa fa-plus-square mx-2" />
                                   </td>
                                   <td>{product.qty * product.price.toFixed(2)}</td>
                                </tr>
                            )
                        })
                      }

                      <tr>
                        <td colSpan={4}></td>
                        <td>Grand Total</td>
                        <td>{grandTotal().toFixed(2)}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
           </div>
        </div>

        </React.Fragment>
    );
}

export default ShopingCard