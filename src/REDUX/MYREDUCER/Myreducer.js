//import { setproducts } from "../MYACTIONS/Myactions";
import { Actiontypes } from "../ACTION_TYPES/Actiontypes";
export const initialState = {
    products : [],
}

export const setReducer = (state = initialState, {type,payload}) => {
   // console.log("madhan2", payload);
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return {
                ...state, products:payload
            }
        default:
            return state;
    }

}

export const selectReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Actiontypes.SELECT_PRODUCTS:
            return {
                ...payload
            }
        case Actiontypes.REMOVE_PRODUCTS:
            return {
                
            }
        default:
            return state;
    }
}