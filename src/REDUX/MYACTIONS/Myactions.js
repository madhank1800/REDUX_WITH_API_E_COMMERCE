import { Actiontypes } from "../ACTION_TYPES/Actiontypes.js";

export const setproducts = (products) => {
   // console.log("madhan1", products);
    return {
    type: Actiontypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectProduct = (product) => {
    
    return {
        type: Actiontypes.SELECT_PRODUCTS,
        payload : product

    }
}

export const removeSelectedProduct = () => {
    return {
      type: Actiontypes.REMOVE_PRODUCTS,
    };
  };
  