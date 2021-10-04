import React from "react";
import { useDispatch } from "react-redux";
import {MODAL} from "../../Redux/constants";
import './Modal.css'

type CardProp = {
  title?: {};
  img: string;
  description: string;
  releaseYear:string
};

export default function Modal(props: CardProp) {
  
    const dispatch = useDispatch()
   
    const setModal=(e:any)=> {
        e.preventDefault()
        dispatch({type: MODAL , payload: false, data: ""})
    } 

  return (
    <div className="modal">
      
      <img className="image" src={props.img} alt="" />
      
      <div className="modalContent">
        <div className="modalHeader">
          <h4>{props.title}</h4>
        </div>
        <div className="modalYear">{props.releaseYear}</div>
        <br/>
        <div className="modalBody">{props.description}</div>
        <div className="modalFooter">
          <button  onClick={(e)=> setModal(e)}  className="button">X</button>
        </div>
      </div>
    </div>
  );
}
