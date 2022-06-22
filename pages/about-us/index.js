import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";

import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader";
import BehindOifa from "../../components/BehindOifa/BehindOifa";
import Header from "../../components/Header/Header";
import OurStory from "../../components/OurStory/OurStory";
import OurValues from "../../components/OurValues/OurValues";
import Layout from "../../layout/";
const AboutUs = () => {
  const smallDesc = useMediaQuery(
    json2mq({
      maxWidth: 1200,
    })
  );
  const header = {
    head: "Our story",
    para:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad eveniet fuga molestias. Dolorum ipsum beatae eum possimus repudiandae animi facere! Dolores, fuga perferendis. Dicta, omnis deserunt.",
  };
  return (
    <div className="AboutUs">
      <Layout w>
        <div className="AboutUs__header">
          <Header
            head={header.head}
            para={header.para}
            img="/aboutHeader.webp"
          />
        </div>

        <div className="AboutUs__BehindOifa">
          <div
            className={cx("container", `container--${smallDesc ? "std" : "l"}`)}
          >
            <BehindOifa />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutUs;
