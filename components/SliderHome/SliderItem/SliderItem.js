import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";
import Image from "next/image";

import Typography from "../../Typography";

const SliderItem = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  return (
    <Box className="SliderItem">
      <Box className="SliderItem__img">
        <Box className="SliderItem__composition">
          <Box className="SliderItem__composition-layer" />
          <Box className="SliderItem__composition-img">
            <Image
              className="Clients__item__img"
              alt=""
              preload="true"
              layout="fill"
              loading="eager"
              src="/homeSlider.webp"
            />
          </Box>
        </Box>
      </Box>
      <Box className="SliderItem__content">
        <Box className="SliderItem__content-box">
          <Typography
            size={phone ? "2rem" : "2.4rem"}
            color="#051438"
            face="Medium"
            height="3.4rem"
            m="0 0 1.6rem 0"
            style={{
              fontStyle: "italic",
            }}
          >
            By leveraging the Oifa platform, we can easily create professional
            programs with minimal effort, which saves us time to focus on
            managing the challenge.
          </Typography>
          <Typography
            size={phone ? "2rem" : "1.6rem"}
            color="#838FA7"
            face="Bold"
            height="2.4rem"
            m="0 0 1rem 0"
          >
            Carrie Chandler - Program manager
          </Typography>
          <Box className="SliderItem__logo">logo</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SliderItem;
