import Box from "@material-ui/core/Box";

import Typography from "../../components/Typography";
import SignUpCard from "./SignUpCard/SignUpCard";
const types = [
  {
    label: "Corporate",
    img: "/corporate.jpg",
    url: "/auth/register/seeker",
  },
  {
    label: "Innovator",
    img: "/innovator.jpg",
    url: "/auth/register/solver",
  },
];

const SignUpList = () => {
  return (
    <Box className="SignUpList">
      <Typography
        color="#000639"
        face="Bold"
        size="3.6rem"
        height="4.5rem"
        style={{
          maxWidth: "70%",
          margin: "0 auto 6rem auto",
          textAlign: "center",
        }}
      >
        Before you sign up, choose your account
      </Typography>
      <Box className="SignUpList__cards">
        {types.map((type, index) => (
          <SignUpCard key={index} type={type} />
        ))}
      </Box>
    </Box>
  );
};

export default SignUpList;
