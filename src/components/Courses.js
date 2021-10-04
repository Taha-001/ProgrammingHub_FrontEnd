import React from "react";
import { Card, Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "./SideDrawer";

const useStyles = makeStyles({
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
  },
});

const Courses = () => {
  const classes = useStyles();
  const courses = [
    {
      image: "/frontend.jpg",
      heading: "Frontend Web Development",
      subheading: "Learn HTML, CSS and Javascript",
    },
    {
      image: "/backend.jpg",
      heading: "Backend Web Development",
      subheading: "Learn Node.js, Flask, Django, Laravel, PHP and more",
    },
    {
      image: "/android.jpg",
      heading: "Android App Development",
      subheading: "Learn Java and Kotlin",
    },
    {
      image: "/iOS.jpg",
      heading: "iOS App Development",
      subheading: "Learn Swift and Objective-C",
    },
    {
      image: "/frontend frameworks.jpg",
      heading: "Frontend Frameworks",
      subheading: "Learn React, Angular, Vue and Bootstrap",
    },
    {
      image: "/competitive programming.jpg",
      heading: "Competitive Programming",
      subheading: "Learn Data Structure and Algorithms, DP and more",
    },
    {
      image: "/machine-learning.jpg",
      heading: "Machine Learning",
      subheading: "Learn how to create Machine Learning Algorithms",
    },
    {
      image: "AI.jpg",
      heading: "Artificial Intelligence",
      subheading:
        "Learn how to create Artificial Intelligence Programs and More",
    },
  ];
  return (
    <Grid container spacing={3} className={classes.gridContainer}>
      {courses.map((course) => {
        return (
          <Grid item sm={4}>
            <Card>
              <CardActionArea>
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
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  View Courses
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Courses;
