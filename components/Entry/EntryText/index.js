import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import cx from "classnames";
import { useField } from "formik";
import React from "react";

const EntryText = ({ className, name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    fullWidth: true,
    variant: "outlined",
    InputLabelProps: { shrink: true },
    ...field,
    ...otherProps,
  };
  // ...
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  // ...
  return (
    <Box className={cx("Entry", "EntryText", { [className]: !!className })}>
      <TextField {...configTextField} />
    </Box>
  );
};

export default EntryText;
