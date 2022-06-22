import SignUpList from "../../components/SignUpList/SignUpList";
import Layout from "../../layout";

const signUpType = () => {
  return (
    <div className="signUpType">
      <Layout w noFooter>
        <SignUpList />
      </Layout>
    </div>
  );
};

export default signUpType;
