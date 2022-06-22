import ScrollArea from "react-scrollbars-custom";

const Scrollbar = ({ children }) => (
  <ScrollArea style={{ width: "100vw", height: "100vh" }}>
    {children}
  </ScrollArea>
);

export default Scrollbar;
