import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React from "react";

import Typography from "../../Typography";

const BehindOifaCard = (props) => {
  const tab = useMediaQuery(
    json2mq({
      maxWidth: 700,
    })
  );
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  return (
    <Box
      className={cx("BehindOifaCard", { "BehindOifaCard--flip": props.flip })}
    >
      <Box className="BehindOifaCard__img-box">
        <Box className="BehindOifaCard__img-composition">
          <Box className="BehindOifaCard__img-under" />
          <Box className="BehindOifaCard__img">
            <Box component="img" src={props.img} />
          </Box>
        </Box>
        {phone && (
          <div className="BehindOifaCard__country--mobile">
            <Typography
              size={phone ? "2.66rem" : "2.8rem"}
              height="3.6rem"
              color="#000020"
              face="Bold"
              m="0 0 1.3rem 0"
            >
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.title}
              </a>
            </Typography>
            <div className="BehindOifaCard__country">
              <div className="BehindOifaCard__country__flag">
                <img src={props.flag} alt="country flag" />
              </div>
              <div className="BehindOifaCard__country__name">
                <Typography
                  size={phone ? "2.33rem" : "1.8rem"}
                  face="Medium"
                  color="#000020"
                >
                  Tunisia
                </Typography>
              </div>
            </div>
          </div>
        )}
      </Box>
      <Box
        className={cx("BehindOifaCard__content", {
          "BehindOifaCard__content--flip": props.flip,
        })}
      >
        {!phone && (
          <>
            <Typography
              size="2.8rem"
              height="3.6rem"
              color="#000020"
              face="Bold"
              m="0 0 1.3rem 0"
            >
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.title}
              </a>
            </Typography>
            <div className="BehindOifaCard__country">
              <div className="BehindOifaCard__country__flag">
                <img src={props.flag} alt="country flag" />
              </div>
              <div className="BehindOifaCard__country__name">
                <Typography size="1.8rem" face="Medium" color="#000020">
                  {props.country}
                </Typography>
              </div>
            </div>
          </>
        )}

        <Typography
          color="#838FA7"
          size={phone ? "2rem" : "1.6rem"}
          face="Medium"
          height={phone ? "5rem" : tab ? "2.4rem" : "3.2rem"}
          align="justify"
        >
          {props.para}
        </Typography>
      </Box>
    </Box>
  );
};

export default BehindOifaCard;
