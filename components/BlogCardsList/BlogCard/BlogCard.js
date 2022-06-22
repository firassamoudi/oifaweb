import Box from "@material-ui/core/Box";
import React from "react";

import Typography from "../../Typography";

const BlogCard = () => {
  return (
    <Box className="BlogCard">
      <Box className="BlogCard__img">
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1573461376061-60fd1c5d29ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80"
        />
      </Box>
      <Box className="BlogCard__body">
        <Typography size="2.4rem" color="#051438" face="Bold" height="3rem">
          Covid19: Embrace Crisis Through Innovation
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
