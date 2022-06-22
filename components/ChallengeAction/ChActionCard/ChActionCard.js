import { Divider } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import { motion } from "framer-motion";
import json2mq from "json2mq";
import React from "react";

import Button from "../../Button";
import Typography from "../../Typography";

const arrow1Variants = {
  initial: {
    x: "-110%",
    opacity: 0,
  },
  hover: {
    x: "50%",
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};
const arrow2Variants = {
  initial: {
    x: "-50%",
  },
  hover: {
    x: "110%",
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};
const dividerVariants = {
  initial: {
    x: "-100%",
    y: "0%",
  },
  hover: {
    x: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

const ChActionCard = (props) => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  // ...
  const renderBtn = () => {
    return props.innovators ? (
      <Box className="ChActionCard__btn-innovators">
        <motion.div initial="initial" whileHover="hover">
          <a href="https://app.oifa.tech/dashboard">
            <Button>{props.btnLabel}</Button>
          </a>
          <Box className="ChActionCard__btn-innovators__divider-box">
            <div className="divider-container">
              <Divider className="ChActionCard__btn-innovators__divider" />
              <motion.div variants={dividerVariants}>
                <Divider className="ChActionCard__btn-innovators__divider-anim" />
              </motion.div>
            </div>
          </Box>

          <Box className="ChActionCard__btn-innovators__arrow">
            <motion.div variants={arrow1Variants}>
              <img style={{ width: "2rem" }} src="/Arrow.svg" alt="arrow" />
            </motion.div>
            <motion.div variants={arrow2Variants}>
              <img style={{ width: "2rem" }} src="/Arrow.svg" alt="arrow" />
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    ) : (
      <Box className="ChActionCard__btn">
        <a href="https://app.oifa.tech/dashboard">
          <Button>{props.btnLabel}</Button>
        </a>
      </Box>
    );
  };
  // ...
  return (
    <Box
      className={cx("ChActionCard", {
        "ChActionCard--innovators": props.innovators,
      })}
    >
      <Box
        className={cx("ChActionCard__box", {
          "ChActionCard__box--innovators": props.innovators,
        })}
      >
        <Box
          className={cx("ChActionCard__tag", {
            "ChActionCard__tag--innovators": props.innovators,
          })}
        >
          <Typography
            face="Bold"
            color={phone && props.innovators ? "#fff" : "#000020"}
            size="1.3rem"
            height="1.6rem"
          >
            {props.tag}
          </Typography>
        </Box>

        <Typography
          face="Bold"
          name="h3"
          color={props.innovators ? "#051438" : "#fff"}
          size="3.3rem"
          height="4rem"
        >
          {props.title.split("_toNew").map((value, index) => {
            return (
              <span key={index}>
                {value}
                <br />
              </span>
            );
          })}
          {props.title2}
        </Typography>
        <Typography
          face="Book"
          color={
            props.innovators ? "rgba(0,0,32,0.52)" : "rgba(255,255,255,0.56)"
          }
          size={phone ? "2rem" : "1.6rem"}
          height="2.5rem"
          m="0"
        >
          {props.para}
        </Typography>

        {renderBtn()}
      </Box>
    </Box>
  );
};

export default ChActionCard;
