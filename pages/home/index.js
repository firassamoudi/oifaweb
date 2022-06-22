import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";

import ChallengeAction from "../../components/ChallengeAction/ChallengeAction";
// import Clients from "../../components/Clients/Clients";
import Faq from "../../components/Faq/Faq";
import Header from "../../components/Header/Header";
import HowWeAre from "../../components/HowWeAre/HowWeAre";
import RequestADemo from "../../components/RequestADemo/RequestADemo";
// import SliderHome from "../../components/SliderHome/SliderHome";
import WhyInnovation from "../../components/WhyInnovation/WhyInnovation";
import Layout from "../../layout";

const Home = () => {
  const header = {
    headSup: "Be part of the leading",
    headInf: "Community for Open Innovation in Africa",
  };
  const faqCorporate = [
    {
      summary: "What are the services provided by OIFA ?",
      details:
        "OIFA gives you the opportunity to launch and manage your open innovation program or challenge online. You can also search for innovation talents from across Africa based on your own criterias and start collaborating with them.",
    },
    {
      summary: "Who can submit a program or a challenge on OIFA ?",
      details:
        "Any validated organization by our admin team, can launch its program or challenge on OIFA, whether you are a small or medium company from the public or private sector, a multinational, or an actor from the civil society.",
    },
    {
      summary:
        "What is the process to follow for an organization to submit a program or a challenge on OIFA ?",
      details: [
        "1st step : Book a demo :  Someone from our business team will walk you through the whole platform and explain you our offers.",
        "2nd step : Create an account : fill the requested informations and wait for our admin validation. This will only take few hours.",
        "3rd step : Sign in and submit your program or challenge",
      ],
    },
    {
      summary: "Do I need to download an app to use OIFA ?",
      details:
        "Not at all. OIFA is available online, you will only need to create an account.",
    },
    {
      summary: "Is OIFA a for free service ?",
      details:
        "Using OIFA to submit your program or challenge or search for innovation talents is not a for free service. We have different packaging that we are offering based on your needs. So don’t hesitate a second, book a demo or send us an email to provide you with more details.",
    },
    {
      summary: "Am I able to use my own branding ?",
      details:
        "Yes ! Once you start filling the program form, you will have the ability to brand it.",
    },
  ];
  const faqInnovators = [
    {
      summary: "What are the services provided by OIFA ?",
      details:
        "OIFA gives you the opportunity to participate in different challenges submitted by small or medium companies from the public or private sector, multinationals, or actors from the civil society from across Africa. Some of them may also reach out to you directly and start collaborating with you.",
    },
    {
      summary: "Who can participate in programs or a challenges on OIFA ?",
      details:
        "Any validated user by our admin team, can participate in programs or challenges on OIFA, whether you are a startup, an entrepreneur, a designer, a developper, a researcher or a student ! However, some corporates may request a specific type of innovation talent, so read the application form carefully.",
    },
    {
      summary:
        "What is the process to follow to participate in a program or a challenge on OIFA ?",
      details: [
        "1st step : Sign up, choose your profile type, fill the requested informations and wait for our admin’s validation. You may also receive a phone call in case we need further details.",
        "2nd step : Once your account validated, you can go online and search for the challenges that may be interesting for you.",
        "3rd step : Take a look at the program or challenge details and submit your application",
        "4th step : make sure you check your notification section and email frequently so you do not miss the answer regarding your application",
      ],
    },
    {
      summary: "Do I need to download an app to use OIFA ?",
      details:
        "Not at all. OIFA is available online, you will only need to create an account.",
    },
    {
      summary: "Is OIFA a for free service ?",
      details:
        "Yes, OIFA is a for free service. All you need to do is to sign up !",
    },
    {
      summary:
        "Am I able to apply to more than one program or challenge at the same time ?",
      details: "Yes you can.",
    },
  ];
  return (
    <div className="Home">
      <Layout w>
        <header className="Home__header">
          <Header
            home
            action
            demo
            headSup={header.headSup}
            headInf={header.headInf}
            img="/hom.webp"
          />
        </header>

        <section className="Home__ChallengeAction">
          <ChallengeAction />
        </section>

        <section className="Home__WhyInnovation">
          <WhyInnovation />
        </section>

        <section className="Home__Faq container container--std">
          <div>
            <Faq title="Corporates FAQ" list={faqCorporate} />
          </div>
          <div>
            <Faq title="Innovation talents FAQ" list={faqInnovators} />
          </div>
        </section>

        <section className="Home__RequestADemo">
          <RequestADemo />
        </section>
      </Layout>
    </div>
  );
};

export default Home;
