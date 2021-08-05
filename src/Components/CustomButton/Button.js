import React from "react";
import "./Button.css";

const CustomButton = ({texto}) => {
    return (
       <button className = "customButton">{texto}</button>
    );

}

export default CustomButton;