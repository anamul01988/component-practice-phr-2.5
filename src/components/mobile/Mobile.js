import React, { useState } from 'react';
import './Mobile.css';
const Mobile = () => {
    const [num, setNum] = useState(100);
   function IncreamentNum (){
      
          return setNum (num+10);
    } 
   function decreamentNum (){
       console.log(typeof num)
            if(num>0){
                // console.log("lower number")
                return setNum (num-10); 
            }
            else{
                console.log("lower number")
            }
         //  return setNum (num-10);  //setNum function vule gele hobe nah tai setNum+1 kaj kore nai
    } 
    return (
        <div className='mobile-content'>
            <h2>Current Number is : {num}</h2>
            <button onClick={IncreamentNum }>Increament</button>
            <button onClick={decreamentNum }>battery down</button>
        </div>
    );
};

export default Mobile;