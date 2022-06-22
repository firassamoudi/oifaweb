import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";

import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oifa - Open Innovation For Africa</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* <link rel="manifest" href="manifest.json" /> */}

        <meta name="title" content="Oifa - Open Innovation For Africa" />
        <meta
          name="description"
          content="Get a demo to see how OIFA gives you the opportunity to launch your open innovation program or participate in the available ones, connect with innovation talents and corporations from across Africa and collaborate together around a specific challenge."
        />
        <meta property="og:title" content="Oifa - Open Innovation For Africa" />
        <meta
          property="og:description"
          content="Get a demo to see how OIFA gives you the opportunity to launch your open innovation program or participate in the available ones, connect with innovation talents and corporations from across Africa and collaborate together around a specific challenge."
        />
        <meta property="og:url" content="https://oifa.org.tn" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://oifa.org.tn/og.jpg" />
        <meta
          property="og:site_name"
          content="Oifa - Open Innovation For Africa"
        />
        <meta name="referrer" content="unsafe-url" />
        <meta property="fb:app_id" content="" />

        <style>{`
          @font-face {
            font-family: "CircularStd";
            font-display: swap;
            src: url("fonts/CircularStd/CircularStd-Black.ttf");
            font-weight: 900;
            font-style: normal;
          }
          
          @font-face {
            font-family: "CircularStd";
            font-display: swap;
            src: url("fonts/CircularStd/CircularStd-Bold.ttf");
            font-weight: bold;
            font-style: normal;
          }
          
          @font-face {
            font-family: "CircularStd";
            font-display: swap;
            src: url("fonts/CircularStd/CircularStd-Medium.ttf");
            font-weight: 500;
            font-style: normal;
          }
          
          @font-face {
            font-family: "CircularStd";
            font-display: swap;
            src: url("fonts/CircularStd/CircularStd-Book.ttf");
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
