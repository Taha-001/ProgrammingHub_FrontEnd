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
import { useDispatch } from "react-redux";

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
let initialCourses = courseInfo[0].courses;
const DisplayCourse = () => {
  const dispatch = useDispatch();
  const [courseType, setCourseType] = useState(null);
  const [courses, setCourses] = useState(initialCourses);
  const courseTypeChangeHandler = (event) => {
    setCourseType(event.target.value);
    console.log(courseType);
    setCourses(
      courseInfo[0].courses.filter((course) => {
        return course.type === courseType;
      })
    );
    console.log(courses);
  };
  const classes = useStyles();
  const closeModal = () => {
    dispatch(modalHandler());
  };
  const modalContent = (
    <div className={classes.root}>
      <Typography component="h1" variant="h4" className={classes.heading}>
        {courseInfo[0].heading}
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Course Type:</FormLabel>
        <RadioGroup
          name="course_type"
          className={classes.radioGroup}
          value={courseType}
          onChange={courseTypeChangeHandler}
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
        {courses.map((course) => {
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
