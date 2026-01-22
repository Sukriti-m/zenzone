import React from "react";
import HelpHeader from "../components/HelpHeader";
const HelpLayout = ({ children }) => {
  return (
    <>
      <HelpHeader />
      {children}
    </>
  );
};

export default HelpLayout;
