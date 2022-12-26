
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct,removeSelectedProduct } from "../REDUX/MYACTIONS/Myactions";
import './Productdetail.css';
export const Productdetails = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.selectUserReducer);
    console.log("productee", product);
    const { id, description, category, price,image ,title} = product;
    const dispatching = useDispatch();

    const fetchdetailss = async (id) => {
        const responsee = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
            console.log("error", err);
        });
        dispatching(selectProduct(responsee.data));
    }
    useEffect(() => {
        if (productId && productId !== "") { fetchdetailss(productId); }
        return () => {
            dispatching(removeSelectedProduct());
        }
    }, [productId]);
    //console.log("response", responsee);
    console.log("producty", product);
    return (
        <>
            <div>
                <div className="card-group h-100" style={{marginTop:"62px"}}>
                    <div className="card">
                      <img  src={image} alt="" className="card-img-top"/>

                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title" style={{fontWeight:"bold"}}>{title}</div>
                            {/* <div className=" card-text ">${price}</div> */}
                            <button type="button" className="btn btn-primary">
                                <span className="badge badge-light">${price}</span>
</button>
                            {/* <nav aria-label="breadcrumb"> <ol className="breadcrumb">{category}</ol></nav> */}
                             {/* <nav aria-label="breadcrumb">
                           <ol class="breadcrumb">
                                    <li class="breadcrumb-item active" aria-current="page">{ category}</li>
                               </ol>
                            </nav> */}
                            <div className="card-text">
                            <div className="alert alert-primary" role="alert" style={{marginTop:"17px"}}>
  {category}
</div></div>
                            <div className="card-text">{description}</div> 
     
                            <button type="button" className="btn btn-primary"  style={{marginTop:"17px"}} >Add to cart</button>
                        </div>
                    </div>
              </div>
        </div>
        </>
    );
}