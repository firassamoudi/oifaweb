import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PlaceIcon from "@material-ui/icons/Place";
import json2mq from "json2mq";
import Link from "next/link";
import React from "react";

import Logo from "../../components/Logo";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Typography from "../../components/Typography";
const Footer = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  const product = {
    title: "Product",
    links: [
      { link: "Corporates", url: "/corporates" },
      { link: "Innovators", url: "/innovators" },
      { link: "Challenges", url: "/challenge" },
    ],
  };

  const help = {
    title: "Help",
    links: [
      { link: "Privacy policy", url: "/privacy-policy" },
      { link: "Terms of services", url: "/terms-of-services" },
    ],
  };
  const ReachUs = {
    title: "Contact us",
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
        url: "tel:+212 52 22 22 22",
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
                    <a>
                      <Typography
                        face="Book"
                        size={phone ? "2.4rem" : "1.44rem"}
                        color="#8092A9"
                      >
                        {link.link}
                      </Typography>
                    </a>
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
    <div className="Footer">
      <div className="container container--std">
        <div className="Footer__box">
          <div className="Footer__col Footer__col--logo">
            <Link href="/home">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className="Footer__col Footer__col--product">
            {renderCol(product)}
          </div>
          <div className="Footer__col Footer__col--help">{renderCol(help)}</div>
          <div className="Footer__col Footer__col--Reach-us">
            {renderCol(ReachUs)}
          </div>
        </div>
        <Divider className="Footer__divider" />
        <div className="Footer__bottom">
          <div className="Footer__copyright">
            <Typography
              size={phone ? "2rem" : "1.44rem"}
              face="Book"
              color="#8092A9"
            >
              Copyright © 2021 Oifa. Built with love in Tunisia & Morocco
            </Typography>
          </div>
          <div className="Footer__social">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
