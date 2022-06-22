import axios from "axios";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

import DotsWave from "../DotsWave";
import InputText from "../InputText";
import Typography from "../Typography";
import Button from "./Button";

const validator = require("email-validator");

const btnVariants = {
  initial: {
    width: "17.5rem",
    borderRadius: "0 1.5rem 1.5rem 0",
    zIndex: 0,
  },
  animate: {
    width: "100%",
    zIndex: 1,
    borderRadius: "1.5rem 1.5rem 1.5rem 1.5rem",
  },
};

const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
};

const SubscribeLabel = () => {
  return (
    <motion.p
      exit={{
        opacity: 0,
      }}
      key={0}
    >
      <Typography face="Bold" color="#fff" size="1.8rem" name="span">
        Subscribe
      </Typography>
    </motion.p>
  );
};
const CongratsLabel = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.controls.set("initial");
      props.setcongAnim(false);
    }, 3000);
    setTimeout(() => {
      props.setlabelAnim(true);
    }, 3002);
  }, []);
  return (
    <motion.div
      className="chv"
      key={1}
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      exit={{
        display: "none",
      }}
    >
      {/* <Confetti /> */}
      <Typography face="Book" color="#fff" size="1.8rem">
        Congrats for being part of OIFA community
      </Typography>
    </motion.div>
  );
};

const Loader = (props) => {
  useEffect(() => {
    return () => {
      props.setcongAnim(true);
    };
  }, []);
  return (
    <motion.div
      key={2}
      exit={{
        opacity: 0,
        transition: {
          delay: 3,
        },
      }}
    >
      <DotsWave />
    </motion.div>
  );
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  // ...
  const [labelAnim, setlabelAnim] = useState(true);
  const [dotsAnim, setdotsAnim] = useState(false);
  const [congAnim, setcongAnim] = useState(false);
  // ...
  const controls = useAnimation();
  // ...
  const onInputChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setEmailError(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // ...
    const isValid = validator.validate(email);
    if (!isValid) return setEmailError(true);
    // ...
    setlabelAnim(false);
    controls
      .start("animate")
      .then(() => setdotsAnim(true))
      .then(() => {
        axios.post("/api/subscribers", { email });
        setEmail("");
      })
      .then(() => setdotsAnim(false));
  };
  // ...
  return (
    <form className="subscribe" onSubmit={(e) => onSubmit(e)}>
      <div className="subscribe__inner">
        <motion.div className="subscribe__input">
          <InputText
            placeholder="Email address"
            name="subscribe"
            value={email}
            onChange={onInputChange}
          />
        </motion.div>

        <motion.div
          className="subscribe__btn"
          variants={btnVariants}
          initial="initial"
          animate={controls}
        >
          <Button type="btn--primary">
            <AnimatePresence exitBeforeEnter>
              {labelAnim && <SubscribeLabel setdotsAnim={setdotsAnim} />}
              {dotsAnim && <Loader setcongAnim={setcongAnim} />}
              {congAnim && (
                <CongratsLabel
                  controls={controls}
                  setcongAnim={setcongAnim}
                  setlabelAnim={setlabelAnim}
                />
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>
      {emailError && (
        <p className="subscribe__error">
          Oups! please enter a valid email address.
        </p>
      )}
    </form>
  );
};

export default Subscribe;
