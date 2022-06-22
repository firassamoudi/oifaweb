import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Typography from "../../Typography";
import InnovationAccrdion from "../Accordion/Accordion";

const innovationList = [
  {
    summary: "New revenue streams",
    details:
      "Did you know that some businesses get more revenue from secondary products rather than from the primary ones? Working with other individuals or organizations will allow you to enter a new market with an idea and product you have.",
  },
  {
    summary: "Reduce costs",
    details:
      "Did you konw that thanks to open innovation, you can share the risk and the costs of your R&D process?",
  },
  {
    summary: "Reduce Time",
    details:
      "Instead of figuring out how to make the desired product, train your people, buy equipment, etc, You will only need to collaborate with the right startups, scientists or students who have already all that and are willing to co-create with you. This will allow you to bring a product to market faster.",
  },
  {
    summary: "Market differenciation",
    details:
      "Make products and services of your organization more distinctive in the market",
  },
];
const corporateList = [
  {
    summary: "Collaboration",
    details:
      "Collaborate with other startups, developers, designers, students,.., Develop business partners and relationships to jointly develop new products and services, for customer satisfaction and revenue maximization",
  },
  {
    summary: "Access",
    details:
      "Get access to market, knowledge and expertise.  Gain a lot of credibility, and attract new business interest from investors.",
  },
  {
    summary: "Reward",
    details:
      " Get rewarded for your idea, if you are selected.   Get the opportunity to refine a company’s value proposition, work closely with future clients, and be introduced to a wider range of corporates.",
  },
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box pt="1.7rem">
          <Typography name="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const InnovationTabs = (props) => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  const tabs = [
    {
      label: "Corporates",
      content: InnovationAccrdion,
      props: { list: innovationList },
    },
    {
      label: "Innovation talents",
      content: InnovationAccrdion,
      props: { list: corporateList },
    },
  ];

  const RenderTabs = (tabs, elevation = 0) => {
    const label = (text) => (
      <Typography
        face="Bold"
        color="#000020"
        size={phone ? "2.33rem" : "1.8rem"}
        style={{
          textTransform: "initial",
        }}
      >
        {text}
      </Typography>
    );

    return (
      <AppBar position="static" className="" elevation={elevation}>
        <Tabs
          className=""
          value={props.value}
          onChange={props.handleChange}
          variant="fullWidth"
        >
          {tabs.map((tab, index) => {
            return <Tab key={index} className="" label={label(tab.label)} />;
          })}
        </Tabs>
      </AppBar>
    );
  };

  const RenderTabPanels = (tabs) => {
    return tabs.map((tab, index) => {
      return (
        <TabPanel key={index} value={props.value} index={index}>
          <tab.content {...tab.props} />
        </TabPanel>
      );
    });
  };

  return (
    <Box className="InnovationTabs">
      {RenderTabs(tabs)}
      {RenderTabPanels(tabs)}
    </Box>
  );
};

export default InnovationTabs;
