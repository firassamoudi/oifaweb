import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

import Button from "../../components/Button";
import Logo from "../../components/Logo";

const mLinks = [
  {
    label: "About us",
    href: "/about-us",
  },
  {
    label: "Corporates",
    href: "/corporates",
  },
  {
    label: "Innovators",
    href: "/innovators",
  },

  {
    label: "Contact us",
    href: "/contact-us",
  },
];

const sLinks = [
  {
    label: "Login",
    href: process.env.API_URL + "/auth/login",
  },
  {
    label: "Register",
    href: "/sign-up",
  },
];

const Aink = ({ link }) => {
  const router = useRouter();
  // ...
  return (
    <Link href={link.href}>
      <a
        className={cx("Navigation__link", {
          __active: router.pathname === link.href,
        })}
      >
        {link.label}
      </a>
    </Link>
  );
};

const Links = () => {
  return (
    <>
      <Box className="Navigation__main">
        {mLinks.map((link, index) => (
          <Aink key={index} link={link} />
        ))}
      </Box>

      <Box className="Navigation__side">
        {sLinks.map((link, index) => (
          <Aink key={index} link={link} />
        ))}
        <Link href="/book-a-demo">
          <Button ghost>Book a demo</Button>
        </Link>
      </Box>
    </>
  );
};

const Navigation = () => {
  // - Mobile Drawer
  const [anchor, setAnchor] = useState(false);
  const mobileDrawer = (e, open) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setAnchor(open);
  };
  // ...
  return (
    <Box component="nav" className="Navigation">
      <Box className="container container--std">
        <Box className="Navigation__inner">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          <Hidden smDown>
            <Links />
          </Hidden>
          <Hidden mdUp>
            <div className="Navigation__mobile">
              <MenuIcon
                style={{ fontSize: "3.5rem" }}
                onClick={(e) => mobileDrawer(e, true)}
              />
            </div>
            <Fragment>
              <Drawer
                anchor="top"
                open={anchor}
                onClose={(e) => mobileDrawer(e, false)}
              >
                <div className="Navigator__mobile__inner">
                  <CloseIcon
                    style={{ fontSize: "3.5rem" }}
                    onClick={(e) => mobileDrawer(e, false)}
                  />
                  <Links />
                </div>
              </Drawer>
            </Fragment>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
