import React from "react";
import SideDrawer from "./SideDrawer";
import { Route } from "react-router-dom";
import TopNavigationBar from "./TopNavigationBar";
import Courses from "./Courses";
import Calendar from "./calendar/Calender";

const Learn = () => {
  return (
    <div>
      <TopNavigationBar />
      <SideDrawer />
      <Route path="/learn" component={Courses} />
      <Route path="/calendar" component={Calendar} />
    </div>
  );
};

export default Learn;
