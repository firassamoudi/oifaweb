
import React from "react";

import Svg from "../Svg";

const Logo = ({ w, style }) => (
  <div className="Logo" style={style}>
    {w ? <Svg src="/oifa_icon_white.svg" /> : <Svg src="/oifa_icon.svg" />}
  </div>
);

export default Logo;
