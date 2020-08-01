import React, {useRef, useEffect, useState} from 'react';
import  './switch.css';



function Switch(){
  const [checked, setChecked]= useState(true)
  
  const ref = useRef(null)
  function handleChange(event){
    setChecked(ref.current.checked)

    if(ref.current.checked){
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-ligth-mode')
      
    }else{
      

      document.body.classList.remove('is-ligth-mode')
      document.body.classList.add('is-dark-mode')
    }

  }
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setChecked(false)
     
    }

  },[])
    return(
        <div className = "dark-mode">
            <p className ="dark-mode-title">Dark Mode</p>
             <input ref={ref}onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox"/> 
            <label className="switch" htmlFor="checkbox">
              </label>
              

            </div>
    );

}
export default Switch;