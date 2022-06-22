import cx from "classnames";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Button from "../Button";
import Typography from "../Typography";

const bounceInVariants = {
  initial: {},
  animate: {
    scale: [0.3, 1.05, 0.9, 1],
    opacity: [0, 0.9, 1],
    transition: {
      duration: 1.5,
    },
  },
};

const ActionBox = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  // ...
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  // ...
  return (
    <div className="ActionBox" ref={ref}>
      <div className="ActionBox__header">
        <Typography
          color="#000C26"
          size="4.1rem"
          height="5.28rem"
          align="center"
          face="Bold"
          m="0 auto 5.2rem auto"
          style={{ maxWidth: "70rem" }}
        >
          Start your journey with Open Innovation For Africa!
        </Typography>
      </div>
      <div
        className={cx("ActionBox__action", {
          "ActionBox__action--light": props.light,
        })}
      >
        <Link href={props.link}>
          <motion.div
            variants={bounceInVariants}
            initial="initial"
            animate={controls}
          >
            <Button ghost>Sign up now!</Button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default ActionBox;
