/* eslint-disable react/jsx-key */
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import cx from "classnames";
const SocialMedia = (props) => {
  const socials = [
    <FacebookIcon />,
    <TwitterIcon />,
    <LinkedInIcon />,
    <InstagramIcon />,
    <YouTubeIcon />,
  ];
  return (
    <div className="SocialMedia">
      <ul
        className={cx("SocialMedia__list", {
          "SocialMedia__list--v": props.vertical,
        })}
      >
        {socials.map((social, index) => {
          return (
            <li
              className={cx("SocialMedia__item", {
                "SocialMedia__item--v": props.vertical,
              })}
              key={index}
            >
              {social}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialMedia;
