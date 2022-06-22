import { useRef } from "react";

import Footer from "./Footer/Footer";
import Navigation from "./Navigation";
import Scrollbar from "./Scrollbar";

const Layout = (props) => {
  return (
    <Scrollbar>
      <div className="Layout">
        <Navigation sticky={false} />
        <div component="main">{props.children}</div>
        {!props.noFooter && <Footer />}
      </div>
    </Scrollbar>
  );
};

export default Layout;
