 import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "../reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store; 
 