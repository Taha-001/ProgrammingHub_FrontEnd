import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  type: {
    fontWeight: "bold",
  },
  root: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
  },
  button: {
    display: "flex",
    alignSelf: "center",
  },
});
const CourseItem = (props) => {
  const selectedCourseHandler = (selectedCourse) => {
    const userChoice = { ...selectedCourse, date: new Date().toDateString() };
  };
  const classes = useStyles();
  return (
    <li>
      <Card className={classes.root} elevation={0}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.heading}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.subheading}
            </Typography>
            <Typography variant="body1" className={classes.type}>
              {props.type}
            </Typography>
          </CardContent>
        </div>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          href={props.link}
          className={classes.button}
          target="_blank"
          onClick={selectedCourseHandler.bind(null, {
            heading: props.heading,
            type: props.type,
            link: props.link,
          })}
        >
          Start Course
        </Button>
      </Card>
    </li>
  );
};

export default CourseItem;
