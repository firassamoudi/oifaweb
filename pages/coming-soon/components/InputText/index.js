import { motion } from "framer-motion";
import React from "react";

const InputText = (props) => {
  const { placeholder, name, type = "text", value, onChange } = props;

  return (
    <div className="inputText">
      <input
        className="inputText__input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
