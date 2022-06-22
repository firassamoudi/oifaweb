import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import Typography from "../Typography";
const Header = (props) => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 530,
    })
  );
  const phoneSmall = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  // ...

  return (
    <div className="Header">
      <div className="Header__bg">
        <div className="Header__bg__over" />
        <Image
          alt=""
          preload="false"
          layout="fill"
          loading="lazy"
          src={props.img}
        />
      </div>
      <div className="container container--std">
        <div className="Header__content">
          <div
            className={cx("Header__content-box", {
              "Header__content-box--home": props.home,
            })}
          >
            <Typography
              face="Bold"
              name="h1"
              size={phoneSmall ? "4.666rem" : "4.2rem"}
              color="#fff"
              height={phoneSmall ? "6rem" : "5.3rem"}
              m="0 0 1.1rem 0"
            >
              {props.head}
            </Typography>
            <Typography
              face="Bold"
              name="h1"
              size={phoneSmall ? "4.666rem" : "4.2rem"}
              color="#fff"
              height={phoneSmall ? "6rem" : "5.3rem"}
            >
              {props.headSup}
            </Typography>
            <Typography
              face="Bold"
              name="h1"
              size={phoneSmall ? "4.666rem" : "4.2rem"}
              color="#fff"
              height={phoneSmall ? "6rem" : "5.3rem"}
              maxWidth="68rem"
              m="0 0 1.1rem 0"
            >
              {props.headInf}
            </Typography>
            <Typography
              face="Medium"
              size={phoneSmall ? "2rem" : "1.6rem"}
              height={phoneSmall ? "3.666rem" : "2.4rem"}
              color="#fff"
              lSpace="0"
              m="0 0 2.6rem 0"
            >
              {props.para}
            </Typography>
            {props.action && (
              <div className="Header__action">
                {props.demo && (
                  <div className="Header__btn-demo">
                    <Link href="/book-a-demo">
                      <Button>Book a demo</Button>
                    </Link>
                  </div>
                )}
                {props.explore && (
                  <div className="Header__btn-explore">
                    <Link href="/explore-challenges">
                      <Button ghost>Explore challenges</Button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
