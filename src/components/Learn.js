import React from "react";
import SideDrawer from "./SideDrawer";
import { Route, Switch } from "react-router-dom";
import TopNavigationBar from "./TopNavigationBar";
import Courses from "./Courses";
import Calendar from "./calendar/Calender";
import Groups from "./Groups";
import ProgressPage from "./ProgressPage";
import DisplayCourse from "./DisplayCourse";
import { useSelector } from "react-redux";

const Learn = () => {
  const showModal = useSelector((state) => state.courses.showModal);
  return (
    <div>
      {showModal && <DisplayCourse />}
      <TopNavigationBar />
      <SideDrawer />
      <Switch>
        <Route exact path="/" component={Courses} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/groups" component={Groups} />
        <Route path="/progress" component={ProgressPage} />
      </Switch>
    </div>
  );
};

export default Learn;
