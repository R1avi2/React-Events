import React, { useState } from "react";
import ProductService from "../Services/ProductService";

let ProductCart=()=>{
  
    let [state ,setState]=useState({
      products : ProductService.getAllProducts()
     
    });
   let {products}=state;
    return(
        <React.Fragment>
          <div className="container mt-3">
           <div className="row">
           <div className="col">
             
             <p className="h1 text-danger">Shoping Cart</p>
             <p>hggf fhj gfg hjgaxkj hgfghk kjhjklakuffc gjkjhv gkhdjgv hjKHghvh hjJgddvhggf fhj gfg hjgaxkj hgfghk kjhjklakuffc gjkjhv gkhdjgv hjKHghvh hjJgddv  hjkhgvhgdg hjegdv heejg hjdhdv hhv</p>
             </div>
             
           </div>
          </div>

          <div className="container mt-3">
          <div className="row">
          <div className="col-md-8">
           {
            products.map((product)=>{
                return (
                    <div className="card shadow-lg mt-3">
                     <div className="card-body">
                     <div className="row align-items-center">
                     <div className="col-md-4">
                      <img src={product.image} alt="" className="img-fluid"/>
                     </div>

                     <div className="col-md-6">
                      <h5 className="display-5">{product.name}</h5>
                      <h6 className="display-6">&#8377;{product.price.toFixed(2)}</h6>
                      <h6 className="display-6">
                        {
                            product.qty >=10 && <span className="text-success">Avaliable</span>
                        }
                        {
                            product.qty <=10 && product.qty >=1 && <span className="text-warning">Almost Out-Of Stack</span>
                        }
                        {
                            product.qty === 0 &&  <span className="text-danger">Out-oF Stack</span>
                        }
                      </h6>
                     </div>
                     </div>
                     </div>
                    </div>
                )
            })
           }
          </div>
        </div>
    </div>
        </React.Fragment>
    );
}

export default ProductCart