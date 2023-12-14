import React, { useState } from "react";


const MyForm = () => {
  const [myDataForm, setMyDataForm] = useState({ name: "", price: "" });

  const typeChangeHandler = (e) => {
    setMyDataForm({ ...myDataForm, name: e.target.value });
  };
  const priceChangeHandler = (e) => {
    setMyDataForm({ ...myDataForm, price: e.target.value });
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(myDataForm);

  
  };
  return (


    <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Product name"
          onBlur={typeChangeHandler}
        />
        <input
          type="text"
          placeholder="price product"
       onBlur={priceChangeHandler}
        />
        <button className="addBtn">
          Add
        </button>
      </form>


 
  );
};

export default MyForm;
