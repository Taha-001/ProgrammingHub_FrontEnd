import React, { useState } from "react";
import Modal from "./Modal";
import courseInfo from "./CourseInfo";
import {
  Button,
  FormControl,
  Typography,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  makeStyles,
} from "@material-ui/core";
import CourseItem from "./CourseItem";
import { modalHandler } from "../Redux/Action/actions";
import { filterCoursesHandler } from "../Redux/Action/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  radioGroup: {
    display: "flex",
    flexDirection: "row",
  },
  radioButton: {
    marginRight: "1.5rem",
  },
  heading: {
    marginBottom: "1rem",
  },
  courseItems: {
    overflow: "auto",
    listStyleType: "none",
    maxHeight: "20rem",
    padding: "0",
    margin: "0",
  },
  closeButton: {
    marginTop: "2rem",
  },
});
const DisplayCourse = () => {
  const courses = useSelector((state) => state.courses.items);
  const courseHeading = useSelector((state) => state.courses.heading);
  const courseType = useSelector((state) => state.courses.courseType);
  const filteredItems = useSelector((state) => state.courses.filteredItems);
  const dispatch = useDispatch();
  const classes = useStyles();
  const courseTypeChangeHandler = (event) => {
    const filteredCourses = courses.filter(
      (course) => course.type === event.target.value
    );
    dispatch(
      filterCoursesHandler({
        filteredItems: filteredCourses,
        courseType: event.target.value,
      })
    );
  };
  const closeModal = () => {
    dispatch(
      modalHandler({
        heading: "",
        courses: [],
        courseType: null,
        filteredItems: [],
      })
    );
  };
  const modalContent = (
    <div className={classes.root}>
      <Typography component="h1" variant="h4" className={classes.heading}>
        {courseHeading}
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Course Type:</FormLabel>
        <RadioGroup
          name="course_type"
          className={classes.radioGroup}
          onChange={courseTypeChangeHandler}
          value={courseType}
        >
          <FormControlLabel
            value="Free"
            control={<Radio color="primary" />}
            label="Free"
            labelPlacement="start"
            className={classes.radioButton}
          />
          <FormControlLabel
            value="Paid"
            control={<Radio color="primary" />}
            label="Paid"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
      <ul className={classes.courseItems}>
        {!courseType &&
          courses.map((course) => {
            return (
              <CourseItem
                key={course.id}
                heading={course.heading}
                subheading={course.subheading}
                type={course.type}
                link={course.link}
              />
            );
          })}
        {courseType &&
          filteredItems.map((course) => {
            return (
              <CourseItem
                key={course.id}
                heading={course.heading}
                subheading={course.subheading}
                type={course.type}
                link={course.link}
              />
            );
          })}
      </ul>
    </div>
  );

  const modalActions = (
    <div>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.closeButton}
        onClick={closeModal}
      >
        Close
      </Button>
    </div>
  );
  return (
    <Modal>
      {modalContent}
      {modalActions}
    </Modal>
  );
};

export default DisplayCourse;
