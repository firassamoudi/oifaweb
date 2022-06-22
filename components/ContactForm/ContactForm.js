import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";
import { Form, Formik } from "formik";
import json2mq from "json2mq";
import React from "react";
import * as Yup from "yup";

import Button from "../Button";
import EntryText from "../Entry/EntryText";
import Typography from "../Typography";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phoneNumber: "",
  comment: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Email is required").required("Email is required"),
  company: Yup.string().required("Company is required"),
  phoneNumber: Yup.string("Phone number is required")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "Must be a valid phone number"
    )
    .required("Phone number is required"),
  comment: Yup.string().required("Comment is required"),
});

const ContactForm = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (values, resetForm) => {
    setLoading(true);
    axios
      .post("/api/contact-us", {
        ...values,
      })
      .then(() => {
        setLoading(false);
        resetForm();
      });
  };
  // ...
  return (
    <Formik
      initialValues={{ ...INITIAL_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {({ isValid, dirty }) => {
        return (
          <Form className="ContactForm" noValidate>
            <Typography
              size={phone ? "4.33rem" : "2.6rem"}
              color="#172d43"
              face="Bold"
              m="0 0 3rem 0"
            >
              Fill out the form
            </Typography>

            <Box className="ContactForm__section">
              <EntryText
                name="firstName"
                label="First Name"
                placeholder="Your first name"
              />
              <EntryText
                name="lastName"
                label="Last name"
                placeholder="Your last name"
              />
            </Box>

            <EntryText
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
              autoComplete="email"
            />
            <Box className="ContactForm__section">
              <EntryText
                name="company"
                label="Company / Organization"
                placeholder="Your Company / organization"
              />
              <EntryText
                name="phoneNumber"
                label="Phone number"
                placeholder="Your phone number"
              />
            </Box>

            <EntryText
              name="comment"
              label="Comment / Question"
              placeholder="How can we help you?"
              multiline
              rows={7}
            />
            <div className="ContactForm__btn">
              <Button
                type="submit"
                isLoading={loading}
                disabled={!(isValid && dirty)}
                style={{
                  width: "100%",
                  height: "6.7rem",
                }}
              >
                Send message
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
