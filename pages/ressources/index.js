import BlogCardsList from "../../components/BlogCardsList/BlogCardsList";
import Typography from "../../components/Typography";
import Layout from "../../layout/";

const Blog = () => {
  return (
    <div className="Blog">
      <Layout w>
        <div className="container container--std">
          <div className="Blog__head">
            <Typography
              face="Black"
              color="#051438"
              size="4.5rem"
              height="4.97rem"
              m="0 0 1.4rem 0"
            >
              Oifa’s ressources
            </Typography>
            <Typography
              face="Medium"
              size="1.6rem"
              height="2rem"
              color="#243160"
              style={{
                textTransform: "uppercase",
              }}
            >
              The largest community of open innovation
            </Typography>
          </div>
        </div>

        <BlogCardsList />
      </Layout>
    </div>
  );
};

export default Blog;
