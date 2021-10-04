import React from 'react'
import './spinner.css'

export default function Spinner() {
    return (
        <div style={{marginBottom:"10%"}}>
            <div className="container">


<div className="head">
    <div className="ears"></div>
    <div className="eyes">
        <div className="inner-eyes"></div>
    </div>
    <div className="eyes">
        <div className="inner-eyes"></div>
    </div>
    <div className="mouth"> </div>
</div>
<div className="body"></div>
<div> <p style={{color:"white"}}>Loading...</p> </div>
</div>
        </div>
    )
}
