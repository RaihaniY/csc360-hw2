import React, {useState} from "react";



export default function Todo({title, desc, creation}){
    const[checked, setChecked] = useState(false);
    function toggle(value){
        return !value;
      }
    return(
        <div>
            <h1>{title}</h1>
            <div>{desc}</div>
            <div>Created on : {creation.toString()}</div>
            <div>
                <b>Completed? </b>
                <input type="checkbox" checked={checked} onChange={() => setChecked(toggle)}
      />            </div>
      {checked &&  <div> Completed on {Date(Date.now())}</div>}
           
        </div>
    )
}