import React from "react";

import ActionBox from "../../components/ActionBox/ActionBox";
import Benefits from "../../components/Benefits/Benefits";
import HeaderSecondary from "../../components/HeaderSecondary/HeaderSecondary";
import Offerings from "../../components/Offerings/Offerings";
import TimeLine from "../../components/TimeLine/TimeLine";
import Layout from "../../layout";

const HeaderContent = {
  head: "Corporates",
  title: "Want to know who can benefit from our platform?",
  img: "/corporate.webp",
  para: [
    "All companies or organizations seeking for an external solution to an outstanding challenge within their organizational environment can get access to OIFA.",
    "Whether you are from the private or public sector,  or an organization from the civil society, OIFA is made for you! Take the time to go through it and book a demo with one of our business team.",
  ],

  label: "Sign up now!",
  link: "https://app.oifa.tech/auth/register/seeker",
};

const BenefitsList = [
  {
    title: "Reduce costs",
    text:
      "Open Innovation enables you to share the risk and the costs of your R&D process.",
  },
  {
    title: "Reduce time",
    text:
      "Significantly reduce the time to reach a solution. Instead of figuring out how to make the desired product, train your people, buy equipment, etc, you just start a collaboration with startups/scientists/students that already has all this, that allows you to bring a product to market faster.",
  },
  {
    title: "Increase differentiation in the market",
    text:
      "Make products and services of your organization more distinctive in the market Create new revenue streams for your company: Did you know that some businesses get more revenue from secondary products rather than from the primary ones? Working with other companies will allow you to enter a new market with an idea and product you have. ",
  },
  {
    title: "Competitive advantages",
    text:
      "Join a community of Open Innovation and provide important competitive advantages for your company Innovate business model (Innovate the business model) ",
  },
];

const Steps = [
  {
    l: [
      {
        title: "Sign up",
        para: "Create your account",
      },
    ],
  },

  {
    r: [
      {
        title: "Book a demo",
        para: "Book a demo and select the appropriate plan with OIFA team",
      },
    ],
  },
  {
    l: [
      {
        title: "Complete your profile",
        para: "Complete all your profile details",
      },
    ],
  },

  {
    l: [
      {
        title: "Launch your open innovation program",
        para:
          "Create your open innovation program and submit it to get approved.",
      },
      {
        title: "Evaluate applications",
        para: "Evaluate the applications & select the innovation talent.",
      },
      {
        title: "Select innovation talents",
        para: "Select the innovation talents you want to collaborate with.",
      },
      {
        title: "Connect and collaborate",
        para:
          "Connect and collaborate with the innovation talent to implement the solution",
      },
    ],
    r: [
      {
        title: "Search for innovation talents",
        para:
          "Search for an innovation talent based on your criteria and connect with them.",
      },
      {
        title: "Connect and Communicate",
        para:
          "Connect with our innovation talents and communicate with them through messaging.",
      },
    ],
  },
];

const OffringList = [
  {
    img: "/startup.webp",
    text: "Call for application",
    para:
      "Start your journey with OIFA and launch your call for  application! Take few minutes to submit your challenge online and then get access to multiple ideas and suggestions to improve your innovation. African innovation talents are waiting for your opportunity!",
  },
  {
    img: "/Developer.webp",
    text: "Open Innovation program",
    para:
      "An Open Innovation Program is a series of multiple challenges you intend to publish at the same time. If this is your case, then take few minutes to create your account, and launch your program by adding your challenges! Get the chance to access multiple ideas and suggestions to improve your innovation. African innovation talents are waiting for your opportunities!",
  },
  {
    img: "/Designer.webp",
    text: "Innovation agents targeting",
    para:
      "Want to connect with some African Innovation talents and discuss with them a potential collaboration? Start by mentioning your criteria and search for the best innovation talents and take the time to connect with them.",
  },
];

const Corporates = () => {
  return (
    <div className="Corporates">
      <Layout w>
        <header className="Corporates__header">
          <div className="container container--std">
            <HeaderSecondary {...HeaderContent} />
          </div>
        </header>

        <section className="Corporates__benefits">
          <div className="container container--std">
            <Benefits
              dark
              content="Here are 4 reasons why you should consider open innovation and start thinking about launching your own program or challenge:"
              list={BenefitsList}
              corporate
            />
          </div>
        </section>
        <section className="Corporates__offerings">
          <div className="container container--std">
            <Offerings list={OffringList} />
          </div>
        </section>
        <section className="Corporates__timeLine">
          <div className="container container--std">
            <TimeLine steps={Steps} cor />
          </div>
        </section>

        <section className="Corporates__actionBox">
          <div className="container container--std">
            <ActionBox light link={HeaderContent.link} />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Corporates;
