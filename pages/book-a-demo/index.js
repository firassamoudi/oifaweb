/* eslint-disable sonarjs/cognitive-complexity */
import NoSsr from "@material-ui/core/NoSsr";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";
import { useState } from "react";

import BookForm from "../../components/BookForm/BookForm";
import Typography from "../../components/Typography";
import Layout from "../../layout";

const BookAdemo = () => {
  const tab = useMediaQuery(
    json2mq({
      maxWidth: 769,
    })
  );
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  const [booked, setbooked] = useState(false);

  return (
    <div className="BookAdemo">
      <Layout w>
        {!booked && (
          <div className="BookAdemo__content container container--std">
            <div className="BookAdemo__bg" />
            <div className="BookAdemo__info">
              <div className="BookAdemo__info__inner">
                <Typography
                  color="#031329"
                  face={phone ? "Medium" : "Black"}
                  size={phone ? "4.66rem" : tab ? "3.5rem" : "4.5rem"}
                  height={phone ? "6rem" : "5.4rem"}
                  m={phone ? "0 0 1rem 0" : "0 0 3rem 0"}
                  maxWidth={phone ? "45rem" : "43.7rem"}
                >
                  Ready to innovate in Africa?
                </Typography>
                <Typography
                  color="#818994"
                  face="Medium"
                  size={phone ? "2rem" : "1.7rem"}
                  height={phone ? "3.66rem" : "2.2rem"}
                  align={phone ? "justify" : "left"}
                  m={phone ? "0 0 3.7rem 0" : "0 0 2.8rem 0"}
                  maxWidth="49.9rem"
                >
                  Book a demo now with one of our business team to learn how
                  OIFA can help your organization be more innovative and solve
                  your challenges.
                </Typography>
                <Typography
                  color="#818994"
                  face="Medium"
                  size={phone ? "2rem" : "1.7rem"}
                  height={phone ? "3.66rem" : "2.2rem"}
                  align={phone ? "justify" : "left"}
                  m={phone ? "0 0 4.8rem 0" : "0 0 2.8rem 0"}
                  maxWidth="49.9rem"
                >
                  Fill the form and we’ll get back to you shortly and connect
                  you to one of our team
                </Typography>
                <Typography
                  color="#031329"
                  face={phone ? "Medium" : "Black"}
                  size={phone ? "2.66rem" : "2rem"}
                  height="2.5rem"
                  m="0 0 2.8rem 0"
                >
                  Book a call now to:
                </Typography>
                <div className="BookAdemo__list">
                  <Typography
                    color="#818994"
                    face="Medium"
                    size={phone ? "2rem" : "1.7rem"}
                    height={phone ? "3.66rem" : "2.2rem"}
                    m={phone ? "0 0 4.1rem 0" : "0 0 2.4rem 0"}
                    maxWidth={phone ? "51.4rem" : "39.4rem"}
                  >
                    Receive an overview of Oifa’s platform from our product
                    expert
                  </Typography>
                  <Typography
                    color="#818994"
                    face="Medium"
                    size={phone ? "2rem" : "1.7rem"}
                    height={phone ? "3.66rem" : "2.2rem"}
                    m={phone ? "0 0 3.8rem 0" : "0 0 2.4rem 0"}
                    maxWidth={phone ? "38.5rem" : "32.5rem"}
                  >
                    Discuss your goals and explore tools to advance them
                  </Typography>
                  <Typography
                    color="#818994"
                    face="Medium"
                    size={phone ? "2rem" : "1.7rem"}
                    height={phone ? "3.66rem" : "2.2rem"}
                    m="0 0 4rem 0"
                  >
                    Get pricing based on your needs
                  </Typography>
                </div>
              </div>
            </div>
            <div className="BookAdemo__form">
              <NoSsr>
                <BookForm booked={setbooked} />
              </NoSsr>
            </div>
          </div>
        )}
        {booked && (
          <div className="container container--std">
            <div className="BookAdemo__confirm">
              <Typography
                name="h2"
                size="3.2rem"
                face="Bold"
                color="#040A20"
                align="center"
                height="6.4rem"
                m="0 0 2.2rem 0"
              >
                Thank you for booking Oifa demo with us!
              </Typography>
              <Typography
                size="1.7rem"
                height="2.2rem"
                color="#838FA7"
                face="Medium"
              >
                We will be in touch shortly, usually within 48 hours! If you
                don’t hear from us within that timeframe (during business days,
                that is!), please check your spam folder as the automated emails
                tend to slip in there easily too.
              </Typography>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default BookAdemo;
