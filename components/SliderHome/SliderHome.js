import Box from "@material-ui/core/Box";
import NoSsr from "@material-ui/core/NoSsr";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import cx from "classnames";
import json2mq from "json2mq";
import React, { useState } from "react";
import Slider from "react-slick";

import SliderItem from "./SliderItem/SliderItem";
const SliderHome = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  const customSlider = React.useRef();
  const list = [
    { component: SliderItem },
    { component: SliderItem },
    { component: SliderItem },
    { component: SliderItem },
  ];
  const [current, setCurrent] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // pauseOnHover: true,
    afterChange: (current) => {
      setCurrent(current);
    },
  };
  const renderList = (list) => {
    return list.map((list, index) => {
      return (
        <Box key={index}>
          <list.component {...list.props} />
        </Box>
      );
    });
  };
  const renderTrackList = (list) => {
    if (phone) return null;
    return list.map((_, index) => {
      return (
        <Box
          className={cx("SliderHome__track-item", {
            "SliderHome__track-item--current": index === current,
          })}
          key={index}
        />
      );
    });
  };
  return (
    <Box className="SliderHome container container--s">
      <NoSsr>
        <Slider ref={customSlider} {...settings}>
          {renderList(list)}
        </Slider>

        {!phone && (
          <Box className="SliderHome__controls">
            <Box className="SliderHome__track">{renderTrackList(list)}</Box>
            <Box className="SliderHome__arrows">
              <Box
                className="SliderHome__arrow"
                onClick={() => customSlider.current.slickPrev()}
              >
                <ArrowBackRoundedIcon
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
              </Box>
              <Box
                className="SliderHome__arrow"
                onClick={() => customSlider.current.slickNext()}
              >
                <ArrowForwardRoundedIcon
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
              </Box>
            </Box>
          </Box>
        )}
      </NoSsr>
    </Box>
  );
};

export default SliderHome;
