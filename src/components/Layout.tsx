import React, { ReactNode } from "react";
import Header from "./Header";

import classes from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <div className={classes.container}>{props.children}</div>
    </>
  );
};

export default Layout;
