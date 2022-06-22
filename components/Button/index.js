import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import cx from "classnames";
import React from "react";
const Button = ({
  className,
  small,
  trans,
  ghost,
  type,
  startIcon,
  endIcon,
  onClick,
  disabled,
  style = {},
  disableRipple,
  children,
  isLoading,
}) => (
  <MuiButton
    className={cx(
      "Button",
      { [className]: className },
      { "Button--small": small },
      { "Button--trans": trans },
      { "Button--ghost": ghost }
    )}
    type={type}
    startIcon={startIcon}
    endIcon={endIcon}
    onClick={onClick}
    disableRipple={trans || disableRipple}
    disabled={disabled}
    style={{ ...style }}
  >
    {isLoading ? (
      <CircularProgress
        style={{
          color: "#fff",
          fontSize: "14px",
          width: "33px",
          height: "33px",
        }}
      />
    ) : (
      children
    )}
  </MuiButton>
);

export default Button;
