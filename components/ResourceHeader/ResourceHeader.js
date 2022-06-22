import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Link from "next/link";

import Typography from "../Typography";
import Social from "./Social/Social";

const ResourceHeader = () => {
  return (
    <div className="ResourceHeader">
      <Link href="/ressources">
        <a>
          <div className="ResourceHeader__back">
            <ArrowBackIosIcon
              style={{
                fontSize: "2.5rem",
              }}
            />
            <Typography
              face="Medium"
              size="1.6rem"
              color="#243160"
              height="2rem"
              style={{ textDecoration: "none" }}
            >
              Ressources
            </Typography>
          </div>
        </a>
      </Link>

      <div className="ResourceHeader__head">
        <Typography face="Black" size="4.5rem" color="#051438" height="4.9rem">
          Covid19: Embrace Crisis Through Innovation
        </Typography>
      </div>
      <div className="ResourceHeader__composition-outer">
        <div className="ResourceHeader__social">
          <Social />
        </div>
        <div className="ResourceHeader__composition">
          <div className="ResourceHeader__composition__under" />
          <div className="ResourceHeader__composition__img">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1555530824-7a5f131e77cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceHeader;
