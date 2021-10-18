import React from "react";
import { Card, Grid, Snackbar, IconButton } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "../SideDrawer";
import { useDispatch } from "react-redux";
import { modalHandler } from "../../Redux/Action/actions";
import courseInfo from "./CourseInfo";
import CloseIcon from "@material-ui/icons/Close";

const courses = [
  {
    id: 1,
    image: "/frontend.jpg",
    heading: "Frontend Web Development",
    subheading: "Learn HTML, CSS and Javascript",
  },
  {
    id: 2,
    image: "/backend.jpg",
    heading: "Backend Web Development",
    subheading: "Learn Node.js, Flask, Django, Laravel, PHP and more",
  },
  {
    id: 3,
    image: "/android.jpg",
    heading: "Android App Development",
    subheading: "Learn Java and Kotlin",
  },
  {
    id: 4,
    image: "/iOS.jpg",
    heading: "iOS App Development",
    subheading: "Learn Swift and Objective-C",
  },
  {
    id: 5,
    image: "/frontend frameworks.jpg",
    heading: "Frontend Frameworks",
    subheading: "Learn React, Angular, Vue and Bootstrap",
  },
  {
    id: 6,
    image: "/competitive programming.jpg",
    heading: "Competitive Programming",
    subheading: "Learn Data Structure and Algorithms, DP and more",
  },
  {
    id: 7,
    image: "/machine-learning.jpg",
    heading: "Machine Learning",
    subheading: "Learn how to create Machine Learning Algorithms",
  },
  {
    id: 8,
    image: "AI.jpg",
    heading: "Artificial Intelligence",
    subheading: "Learn how to create Artificial Intelligence Programs and More",
  },
];

const useStyles = makeStyles({
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
  },
});

const Courses = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const dispatch = useDispatch();
  const classes = useStyles();
  const courseClickedHandler = (heading) => {
    const findCourse = courseInfo.find((course) => course.heading === heading);
    dispatch(
      modalHandler({ courses: findCourse.courses, heading: findCourse.heading })
    );
  };

  return (
    <Grid container spacing={3} className={classes.gridContainer}>
      {courses.map((course) => {
        return (
          <Grid item sm={4} key={course.id}>
            <Card>
              <CardActionArea
                onClick={courseClickedHandler.bind(null, course.heading)}
              >
                <CardMedia
                  style={{ height: "250px" }}
                  image={course.image}
                  title={course.heading}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {course.heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {course.subheading}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Courses
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Course Added."
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Grid>
  );
};

export default Courses;
