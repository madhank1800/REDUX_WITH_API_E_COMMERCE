import React, { useEffect } from "react";
import axios  from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setproducts } from "../REDUX/MYACTIONS/Myactions";
import { Productcomponent } from "./Productcomponent";
//import { Productcomponent } from "./Productcomponent";
export const Productlist = ()=>{
    const products = useSelector((state) => state.setUserReducer);
    console.log("products",products);
    const dispatch = useDispatch();
    const fetchdetails =async  () => {
        let response= await axios.get('https://fakestoreapi.com/products').catch(err => {
         
            console.log("err",err);
         }
         );
         dispatch(setproducts(response.data));
     }
    useEffect(() => {


       

        fetchdetails();
    }, []);
    console.log("sumanth", products);
    //console.log("store", state.Productlist);
    return (
        <>
            {/* <h1 style={{color:"blue",textAlign:"center"}}>fox App</h1>  */}
        <Productcomponent/>
        </>
    );
}