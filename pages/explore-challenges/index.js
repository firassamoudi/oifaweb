import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import Error from "next/error";

import ChallengeList from "../../components/ChallengeList/ChallengeList";
import Header from "../../components/Header/Header";
import Layout from "../../layout";

const Challenge = ({ error, challenges }) => {
  if (challenges?.error || error) {
    return <Error statusCode={"Enactus Tunisie"} />;
  }
  // ...
  const smallDesc = useMediaQuery(
    json2mq({
      maxWidth: 1200,
    })
  );
  const header = {
    head: "Let’s highlight Open Innovation In Africa",
    para: `Discover and Host the top Open innovation challenges in Africa for
    Startups, Creatives and developers`,
  };
  return (
    <div className="challenge">
      <Layout w>
        <header className="challenge__header">
          <div
            className={cx("container", `container--${smallDesc ? "std" : "l"}`)}
          >
            <Header
              action
              simple
              head={header.head}
              para={header.para}
              img="/homeHero.webp"
            />
          </div>
        </header>
        <div
          className={cx("container", `container--${smallDesc ? "std" : "l"}`)}
        >
          <section className="challenge__challengeList">
            <ChallengeList data={challenges} />
          </section>
        </div>
      </Layout>
    </div>
  );
};

Challenge.getInitialProps = async () => {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/explore-challenges/`);
    const challenges = await res.json();
    return { challenges };
  } catch (err) {
    return { error: true };
  }
};

export default Challenge;
