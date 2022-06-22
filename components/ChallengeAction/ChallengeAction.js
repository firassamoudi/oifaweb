import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React from "react";

import Typography from "../Typography";
import ChActionCard from "./ChActionCard/ChActionCard";
const ChallengeAction = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );

  const cards = [
    {
      tag: "Corporates",
      title: "Fast-track _toNew your innovation projects in Africa",
      para:
        "Don't hesitate anymore and start a new adventure with Open Innovation For Africa!",
      btnLabel: "Host your challenge",
      innovators: false,
    },
    {
      tag: "Innovation Talents",
      title: "Access new business opportunities to accelerate your growth",
      para:
        "With OIFA, you identify clear market needs and you connect with potential clients on specific innovation projects.",
      btnLabel: "Apply for a challenge",
      innovators: true,
    },
  ];

  const renderCards = (cards) => {
    return cards.map(({ tag, title, para, btnLabel, innovators }, index) => {
      return (
        <ChActionCard
          key={index}
          tag={tag}
          title={title}
          para={para}
          btnLabel={btnLabel}
          innovators={innovators}
        />
      );
    });
  };

  return (
    <Box className="ChallengeAction container container--std">
      <Box className="ChallengeAction__body">{renderCards(cards)}</Box>
    </Box>
  );
};

export default ChallengeAction;
