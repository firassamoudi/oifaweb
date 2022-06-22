import Box from "@material-ui/core/Box";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import cx from "classnames";

import Typography from "../../Typography";

const SignUpCard = ({ type }) => {
  return (
    <Box
      component="a"
      href={`${process.env.API_URL}${type.url}`}
      className="SignUpCard"
    >
      <Box className="SignUpCard__img">
        <Box component="img" src={type.img} alt="" />
      </Box>

      <Typography
        className="SignUpCard__label"
        face="Medium"
        size="2rem"
        height="2.5rem"
        color="#fff"
      >
        {type.label}
      </Typography>
    </Box>
  );
};

export default SignUpCard;
