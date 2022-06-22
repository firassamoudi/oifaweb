import SectionPara from "../../../components/BlogSections/SectionPara/SectionPara";
import ResourceHeader from "../../../components/ResourceHeader/ResourceHeader";
import Layout from "../../../layout";

const content = {
  para:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dui sed dui vestibulum cursus ac sed orci. Quisque lorem sapien, tempus et cursus non, elementum ac tellus. Donec ac urna diam. Vivamus porta vehicula urna at fermentum. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dui sed dui vestibulum cursus ac sed orci. Quisque lorem sapien, tempus et cursus non, elementum ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dui sed dui vestibulum cursus ac sed orci. Quisque lorem sapien, tempus et cursus non, elementum ac tellus. Donec ac urna diam. Vivamus porta vehicula urna at fermentum. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dui sed dui vestibulum cursus ac sed orci. Quisque lorem sapien, tempus et cursus non, elementum ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dui sed dui vestibulum cursus ac sed orci. Quisque lorem sapien, tempus et cursus non, elementum ac tellus. Donec ac urna diam.",
  title: "Covid19: Embrace Crisis Through Innovation",
  link: "link",
};

const Article = () => {
  return (
    <div className="Article">
      <Layout w>
        <div className="container container--small">
          <div className="Article__header">
            <ResourceHeader />
          </div>

          <SectionPara para={content.para} />

          <SectionPara title={content.title} para={content.para} />

          <SectionPara title={content.title} para={content.para} link img />
        </div>
      </Layout>
    </div>
  );
};

export default Article;
