import React from "react";

import ActionBox from "../../components/ActionBox/ActionBox";
import Benefits from "../../components/Benefits/Benefits";
import HeaderSecondary from "../../components/HeaderSecondary/HeaderSecondary";
import InnoTalents from "../../components/InnoTalents/InnoTalents";
import Offerings from "../../components/Offerings/Offerings";
import TimeLine from "../../components/TimeLine/TimeLine";
import Layout from "../../layout";

const HeaderContent = {
  head: "Innovation Talent",
  img: "/innovation.webp",
  title:
    "Innovation talent can be a student,  developer, designer, research provider or startup that has digital technology expertise and innovation capabilities.",
  para: [
    "The innovation talent should have the ability and desire to co-create and innovate in collaboration with a corporate and/or an organization to translate their ideas into solutions that can address the problem statements.",
  ],

  label: "Sign up now!",
  link: "https://app.oifa.tech/auth/register/solver",
};

const BenefitsList = [
  {
    title: "1",
    text: "Collaborate with other startups, developers, designers, students…",
  },
  {
    title: "2",
    text:
      "Develop business partners and relationships to jointly develop new products and services, for customer satisfaction and revenue maximization",
  },
  { title: "3", text: "Get access to market, knowledge and expertise" },
  { title: "4", text: "Get rewarded for your idea, if you are selected" },
  {
    title: "5",
    text:
      "Get the opportunity to refine a company’s value proposition, work closely with future clients, and be introduced to a wider range of corporates",
  },
  {
    title: "6",
    text:
      "Gain a lot of credibility, and get the chance to attract new business interest from investors",
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
        title: "Approval",
        para: "Get validated by our Admin team",
      },
    ],
  },
  {
    l: [
      {
        title: "Search for opportunities",
        para:
          "Search for opportunities based on your capabilities and fields of expertise",
      },
    ],
  },
  {
    r: [
      {
        title: "Follow up",
        para: "Follow up on your applications' status and get notified",
      },
    ],
  },
  {
    l: [
      {
        title: "Connect",
        para:
          "connect and collaborate with corporates to implement your solution ",
      },
    ],
  },
];

const InnoTalentList = [
  { img: "/startup.webp", text: "Startup" },
  { img: "/Developer.webp", text: "Developer" },
  { img: "/Designer.webp", text: "Designer" },
  { img: "/researcher.webp", text: "Researcher" },
  { img: "/student.webp", text: "Student" },
];

const OffringList = [
  {
    img: "/startup.webp",
    text: "Incubation",
    para:
      "Get the opportunity to have access to training, coaching & mentoring sessions by experts, to work on your solution and bring it into life.",
  },
  {
    img: "/Developer.webp",
    text: "Cash prize",
    para:
      "Corporates can also offer you cash prize if you are one of the winning teams.",
  },
  {
    img: "/Designer.webp",
    text: "Equipments & Trainings",
    para:
      "Access to equipments & trainings: get access to the latest technological equipments and the most on-demand trainings to boost your knowledge and career.",
  },
];

const Innovators = () => {
  return (
    <div className="Innovators">
      <Layout w>
        <div className="container container--std">
          <header className="Innovators__header">
            <HeaderSecondary {...HeaderContent} />
          </header>
        </div>
        <section className="Innovators__talents">
          <div className="container container--std">
            <InnoTalents list={InnoTalentList} />
          </div>
        </section>
        <section className="Innovators__innoBenefits">
          <div className="container container--std">
            <Benefits
              content="Here are 6 reasons why you should consider open innovation and start looking for the appropriate program or challenge that may interest you"
              list={BenefitsList}
            />
          </div>
        </section>
        <section className="Innovators__timeLine">
          <div className="container container--std">
            <TimeLine steps={Steps} />
          </div>
        </section>
        <section className="Innovators__offerings">
          <div className="container container--std">
            <Offerings list={OffringList} />
          </div>
        </section>
        <section className="Innovators__actionBox">
          <div className="container container--std">
            <ActionBox link={HeaderContent.link} />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Innovators;
