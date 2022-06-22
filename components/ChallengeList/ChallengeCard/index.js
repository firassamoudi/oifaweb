/* eslint-disable sonarjs/cognitive-complexity */
import Box from "@material-ui/core/Box";
import GroupIcon from "@material-ui/icons/Group";
import PlaceIcon from "@material-ui/icons/Place";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import moment from "moment";
import React from "react";

import Typography from "../../Typography";

const InfoItem = ({ label, icon }) => (
  <Box className="__item">
    {icon || <Box className="__item__icon" />}
    <Typography face="Medium" size="1.2rem" noWrap>
      {label}
    </Typography>
  </Box>
);

const ProgramCard = ({ data }) => {
  return (
    <Box className="ProgramCard">
      <div className="ProgramCard__box">
        <div className="ProgramCard__composition">
          <div className="ProgramCard__composition__under" />
          <div className="ProgramCard__composition__img">
            <div className="ProgramCard__composition__upper" />
            <div className="ProgramCard__head">
              <img src={data.image} alt="" />
            </div>
          </div>
        </div>
        <div className="ProgramCard__body">
          <Typography
            color="#051438"
            size="1.6rem"
            face="Black"
            height="2.5rem"
            m="0 0 1rem 0"
          >
            {data.title}
          </Typography>
          <Typography color="#051438" size="1.2rem" face="Medium">
            <span style={{ color: "#9197a5" }}>Hosted by</span>
            <span>{` ${data.hostedBy}`}</span>
          </Typography>
          <div className="ProgramCard__info">
            <div className="ProgramCard__info__item">
              <InfoItem label={data.country} icon={<PlaceIcon />} />
            </div>
            {data.date && (
              <div className="ProgramCard__info__item">
                <InfoItem
                  label={moment(data.date).format("DD MMMM YYYY")}
                  icon={<QueryBuilderIcon />}
                />
              </div>
            )}

            <div className="ProgramCard__info__item">
              <InfoItem label={data.target} icon={<GroupIcon />} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ProgramCard;
