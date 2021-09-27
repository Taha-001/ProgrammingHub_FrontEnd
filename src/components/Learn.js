import React from "react";
import SideDrawer from "./SideDrawer";
import TopNavigationBar from "./TopNavigationBar";
import Courses from "./Courses";

const Learn = () => {
  return (
    <div>
      <TopNavigationBar />
      <Courses />
      <SideDrawer />
    </div>
  );
};

export default Learn;
