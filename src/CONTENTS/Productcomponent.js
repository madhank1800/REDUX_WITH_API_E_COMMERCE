import React from "react";
import { useSelector } from "react-redux";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import { initialState } from "../REDUX/MYREDUCER/Myreducer";
import {Link } from "react-router-dom";
export const Productcomponent = () => {
    const things = useSelector((state)=>state.setUserReducer.products);
    console.log("things", things);
    //const columnsPerRow = 4;
    const renderList = things.map((product) => {
        const { id,title, category, description, image ,price} = product;
        return (
            <>
              
                <div    key={id}>
                    
                    <Link to={`/product/${id}`}>
                <div className="card col-12 h-100">
                    <img src={image} className="card-img-top" alt="" />
                    <div className="card-body">
                                <h4 className="card-title">{title}</h4>
                                <div className="card-text">${ price}</div>
                        <div>{category}</div>
                       
                      
                    </div>
                            </div></Link>
                        </div>
                
                    
                    
        </>
        )
        
    });
    return (
        <>
            <div className="container "  style={{marginTop:"62px"}}>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                
                
                {renderList}
      </div></div>
        </>
    )
}
