import cx from "classnames";
import { motion } from "framer-motion";
import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.action} className={cx("btn", "chv", props.type)}>
      {props.children}
    </button>
  );
};

export default Button;
