import React from "react";
import SideDrawer from "./SideDrawer";
import { Route } from "react-router-dom";
import TopNavigationBar from "./TopNavigationBar";
import Courses from "./Courses";
import Calendar from "./calendar/Calender";
import Groups from "./Groups";
import ProgressPage from "./ProgressPage";

const Learn = () => {
  return (
    <div>
      <TopNavigationBar />
      <SideDrawer />
      <Route exact path="/learn" component={Courses} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/groups" component={Groups} />
      <Route path="/progress" component={ProgressPage} />
    </div>
  );
};

export default Learn;
