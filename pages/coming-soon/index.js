import Logo from "./components/Logo";
import Subscribe from "./components/Subscribe";
import Typography from "./components/Typography";

const Home = () => {
  // ...
  return (
    <>
      <nav className="NavigationComingSoon">
        <a href="/">Home</a>
        <a href="/who-we-are">Who we are?</a>
        <a href="/book-a-demo">Book a demo</a>
      </nav>
      <div className="ComingSoon">
        <div className="ComingSoon__logo">
          <div className="ComingSoon__logo__inner">
            <Logo w style={{ width: "16.2rem", height: "5.9rem" }} />
          </div>
        </div>
        <div className="container container--std">
          <div className="ComingSoon__bg">
            <div className="ComingSoon__bg-layer" />
            <div className="ComingSoon__bg-img">
              <img src="/coming-soon.webp" />
            </div>
          </div>
          <div className="ComingSoon__div">
            <Typography className="__title" name="h1">
              Open Innovation
              <br />
              For Africa is coming soon!
            </Typography>
            <Typography
              size="2.4rem"
              face="Bold"
              color="#C0C5D3"
              m="0 0 5.1rem 0"
            >
              Subscribe now and be the first to get notified once OIFA is live!
            </Typography>
            <Subscribe />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
