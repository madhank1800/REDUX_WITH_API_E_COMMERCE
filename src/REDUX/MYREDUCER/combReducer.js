import { combineReducers } from "redux";
import { setReducer, selectReducer } from "./Myreducer";

const Reducer = combineReducers({
    setUserReducer: setReducer,
    selectUserReducer: selectReducer,
});

export default Reducer;