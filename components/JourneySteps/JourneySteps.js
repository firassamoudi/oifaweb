import React from "react";

import Typography from "../Typography";
import CardsList from "./CardsList/CardsList";

const Steps = [
  {
    list: [{ title: "Sign up", para: "Create your account" }],
  },

  {
    list: [
      {
        title: "Search for opportunities",
        para:
          "Search for opportunities based on your capabilities and fields of expertise",
      },
    ],
  },

  {
    list: [
      {
        title: "Follow up",
        para: "Follow up on your applications' status and get notified",
      },
    ],
  },

  {
    list: [
      {
        title: "Connect",
        para:
          "connect and collaborate with corporates to implement your solution",
      },
    ],
  },
];

const JourneySteps = (props) => {
  return (
    <div className="JourneySteps">
      <div className="JourneySteps__header">
        <div className="JourneySteps__head">
          <Typography color="#fff" size="4.1rem" align="justify" face="Bold">
            Your journey with OIFA step by step
          </Typography>
        </div>
      </div>
      <div className="JourneySteps__body">
        <CardsList list={Steps} theme={props.dark} />
      </div>
    </div>
  );
};
// {CardsList(Steps, props.dark)}
export default JourneySteps;
