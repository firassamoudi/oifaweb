import Joi from "@hapi/joi";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

import Button from "../Button";
import EntryText from "../Entry/EntryText";
import Typography from "../Typography";
const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  jobTitle: "",
  company: "",
  size: "",
  country: "",
  comment: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Email is required").required("Email is required"),
  phoneNumber: Yup.string("Phone number is required")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "Must be a valid phone number"
    )
    .required("Phone number is required"),
  jobTitle: Yup.string().required("Job title is required"),
  company: Yup.string().required("Company is required"),
  size: Yup.number("Company size is required").required(
    "Company size is required"
  ),
  country: Yup.string().required("Country is required"),
  comment: Yup.string().required("Comment is required"),
});

const BookForm = (props) => {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (values, resetForm) => {
    setLoading(true);
    axios
      .post("/api/book-a-demo", {
        ...values,
      })
      .then(() => {
        setLoading(false);
        resetForm();
        props.booked(true);
      });
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {({ isValid, dirty }) => {
        return (
          <Form className="BookForm">
            <Typography
              size="2.68rem"
              color="#172d43"
              face="Bold"
              m="0 0 3.4rem 0"
            >
              Fill out the form
            </Typography>

            <Box className="BookForm__section">
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
            <Box className="BookForm__section">
              <EntryText
                name="email"
                label="Email"
                placeholder="Email@email.com"
                type="email"
                autoComplete="email"
              />
              <EntryText
                name="phoneNumber"
                label="Phone number"
                placeholder="Your phone number"
              />
            </Box>

            <Box className="BookForm__section">
              <EntryText
                name="jobTitle"
                label="Job title"
                placeholder="Job title"
              />
              <EntryText
                name="company"
                label="Company / Organization"
                placeholder="Your Company / organization"
              />
            </Box>
            <Box className="BookForm__section">
              <EntryText
                type="number"
                name="size"
                label="Company / Organization size"
                placeholder="How many employees ?"
              />
              <EntryText
                name="country"
                label="Country"
                placeholder="Your Company / organization"
              />
            </Box>
            <EntryText
              name="comment"
              label="Comment / Question"
              placeholder="How can we help you?"
              multiline
              rows={7}
            />
            <Button
              isLoading={loading}
              disabled={!(isValid && dirty)}
              style={{
                width: "100%",
                height: "6.7rem",
              }}
              type="submit"
            >
              Book a demo
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BookForm;
