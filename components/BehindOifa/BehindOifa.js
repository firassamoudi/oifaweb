import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";

import Typography from "../Typography";
import BehindOifaCard from "./BehindOifaCard/BehindOifaCard";
const BehindOifa = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  return (
    <Box className="BehindOifa">
      <Box className="BehindOifa__head">
        <Typography
          face="Black"
          size={phone ? "4rem" : "3.8rem"}
          height="4.97rem"
          color="#051438"
          m="0 0 1.57rem 0"
        >
          Who we are?
        </Typography>
        <Typography
          face="Medium"
          color={phone ? "#838FA7" : "#051438"}
          size={phone ? "2.666rem" : "2rem"}
          height={phone ? "5rem" : "2.5rem"}
          align={phone ? "justify" : "left"}
          style={{
            maxWidth: "55.2rem",
          }}
        >
          Meet the team who has been working on Open Innovation For Africa
          platform
        </Typography>
      </Box>
      <Box className="BehindOifa__cards">
        <Box>
          <BehindOifaCard
            flag="/Tunisia.svg"
            title="Mazam"
            country="Tunisia"
            link="http://mazam.tn"
            para="MAZAM is a program development agency founded in 2011 in the wake of the Tunisian revolution and the unprecedented change that it brought to the country. This is why, MAZAM started as a change engine through projects, programs, initiatives, conferences, bootcamps and many more. MAZAM expertise evolves around entrepreneurship and youth empowerment."
            img="/mazam.webp"
          />
        </Box>

        <BehindOifaCard
          flag="/morocco.svg"
          title="Impact Lab"
          country="Morocco"
          link="http://www.impactlab.Africa/"
          para="The Impact Lab is a boutique consultancy developing strategies for co-creation and collaborative innovation, and delivering a set of accompanying strategic services. We follow the philosophy of Creating Shared Value, but we take it even further to reflect the co-creative values that we foster in every project"
          img="/impactlab.webp"
          flip
        />
      </Box>
    </Box>
  );
};

export default BehindOifa;
