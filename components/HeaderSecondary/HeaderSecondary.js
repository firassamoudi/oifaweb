import Image from "next/image";
import Link from "next/link";
import React from "react";

import Typography from "../../pages/coming-soon/components/Typography";
import Button from "../Button";

const HeaderSecondary = (props) => {
  return (
    <div className="HeaderSecondary">
      <Typography name="h1" size="6.2rem" color="#051438" face="Bold">
        {props.head}
      </Typography>
      <div className="HeaderSecondary__box">
        <div className="HeaderSecondary__img-box">
          <div className="HeaderSecondary__img">
            <Image
              alt=""
              preload="false"
              layout="fill"
              loading="lazy"
              src={props.img}
            />
          </div>
        </div>
        <div className="HeaderSecondary__content">
          <div>
            <Typography
              name="h2"
              color="#000000"
              height="4.8rem"
              face="Bold"
              size="3.8rem"
              m="0 0 2.2rem 0"
            >
              {props.title}
            </Typography>
            {props.para.map((text, index) => {
              return (
                <div key={index}>
                  <Typography
                    color="#666666"
                    size="1.8rem"
                    face="Medium"
                    align="justify"
                    height="2.8rem"
                    m="0 0 2.7rem 0"
                  >
                    {text}
                  </Typography>
                </div>
              );
            })}

            <Link href={props.link}>
              <Button>{props.label}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSecondary;
