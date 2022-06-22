import NoSsr from "@material-ui/core/NoSsr";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";
import Link from "next/link";
import React from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import Typography from "../../components/Typography";
import Layout from "../../layout";

const ReachUs = {
  title: "Reach us",
  links: [
    {
      link: "Le 15, 15 Avenue de Carthage, Tunis, Tunisia",
      url:
        "https://www.google.com/maps/place/MAZAM/@36.863906,10.283198,14z/data=!4m5!3m4!1s0x0:0xc623249a09914148!8m2!3d36.8639057!4d10.2831981?hl=fr",
      icon: <img src="/address.svg" alt="" />,
      newTab: true,
    },
    {
      link: "+216 58 58 58 58",
      url: "tel:+216 58 58 58 58",
      icon: <img src="/phone number.svg" alt="" />,
    },
    {
      link: "02, rue Pierre et Marie Curie, Apt 1, Casablanca, Maroc",
      url:
        "https://www.google.com/maps/place/IMPACT+Lab/@33.5900349,-7.6248033,15z/data=!4m5!3m4!1s0x0:0x5d26562a92521583!8m2!3d33.5900349!4d-7.6248033",
      icon: <img src="/address.svg" alt="" />,
      newTab: true,
    },
    {
      link: "+212 52 22 22 22",
      url: "tel:+212 52 22 22 22",
      icon: <img src="/phone number.svg" alt="" />,
    },
  ],
};

const ContactUs = () => {
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
  const renderCol = (col) => {
    return (
      <>
        <Typography
          size={phone ? "2.55rem" : "1.53rem"}
          face="Medium"
          color="#172D43"
          m="0 0 3.2rem 0"
        >
          {col.title}
        </Typography>
        <ul className="Footer__col-list">
          {col.links.map((link, index) => {
            return (
              <li className="Footer__col-item" key={index}>
                {link.icon}
                {link.newTab ? (
                  <a href={link.url} target="_blank">
                    <Typography
                      face="Book"
                      size={phone ? "2.4rem" : "1.44rem"}
                      color="#8092A9"
                    >
                      {link.link}
                    </Typography>
                  </a>
                ) : (
                  <Link href={link.url}>
                    <Typography
                      face="Book"
                      size={phone ? "2.4rem" : "1.44rem"}
                      color="#8092A9"
                    >
                      {link.link}
                    </Typography>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <div className="ContactUs">
      <Layout w>
        <div className="container container--std">
          <div className="ContactUs__box">
            <div className="ContactUs__img-box">
              <div className="ContactUs__img">
                <Typography
                  color="#031329"
                  face={phone ? "Medium" : "Black"}
                  size={phone ? "4.66rem" : tab ? "3.5rem" : "4.5rem"}
                  height={phone ? "6rem" : "5.4rem"}
                  m={phone ? "0 0 1rem 0" : "0 0 3rem 0"}
                  maxWidth={phone ? "45rem" : "43.7rem"}
                >
                  Contact us
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
                  Reach out to us any time and we'll happily answer your
                  questions?
                </Typography>
                {renderCol(ReachUs)}
              </div>
            </div>
            <div className="ContactUs__form-box">
              <NoSsr>
                <ContactForm />
              </NoSsr>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ContactUs;
