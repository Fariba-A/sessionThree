import React, { useState } from "react";

const ProductsCard = ({ data }) => {


  
  const [Number ,setNumber] = useState(0);

  const incHandler = () => {
    setNumber(Number+1)
 
 
  }
  const decHandler = () => {

if(Number>0){
  setNumber(Number-1) ;
}



   
  }
  const addHandler=()=>{
    console.log(data);
     }
  return (
    <div>
      <img src={data.image} />
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>
<div >      
      <button onClick={incHandler} >
     +
 
      </button>
      <p>{Number}</p>
          <button onClick={decHandler} >
    -
      </button></div>

 <button onClick={addHandler} className="addBtn">Add</button>
    </div>
 
  );
};

export default ProductsCard;
