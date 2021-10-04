import React from "react";
import SideDrawer from "./SideDrawer";
import TopNavigationBar from "./TopNavigationBar";
import { drawerWidth } from "./SideDrawer";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
const completed = 42;
const useStyles = makeStyles({
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
    paddingLeft: "1rem",
  },
  type: {
    fontSize: "0.85rem",
  },
  courseName: {
    fontWeight: "bold",
    marginBottom: "0.75rem",
    marginTop: "0.25rem",
  },
  btn: {
    textTransform: "none",
    marginRight: "0.5rem",
  },
  progressCard: {
    backgroundColor: blue[50],
    padding: "1rem",
    borderRadius: "0.75rem",
    margin: "1.25rem 0.5rem",
  },
  completedText: {
    color: blue[600],
    fontWeight: "bold",
  },
  progressBar: {
    // backgroundColor: "rgb(234, 233, 227)",
    // borderRadius: "2px",
    // height:"5px",
    width: "100%",
  },
  card:{
    borderRadius:"0.85rem",
  }
});

const ProgressPage = () => {
  const classes = useStyles();
  return (
    <div>
      <TopNavigationBar />
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid item md={4}>
          <Card elevation={0} variant="outlined" className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" className={classes.type}>
                Web Development
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                className={classes.courseName}
              >
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                Ut lobortis dolor ex, eget vehicula eros condimentum et.
                Maecenas rhoncus metus sed elit ornare laoreet. Quisque quis
                varius nisl.
              </Typography>
              <div className={classes.progressCard}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.type}
                >
                  Progress:
                </Typography>
                <Typography className={classes.completedText}>
                  {completed}% completed
                </Typography>
                <progress
                  min="0"
                  max="100"
                  value={completed}
                  className={classes.progressBar}
                ></progress>
              </div>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.btn}
              >
                JavaScript
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.btn}
              >
                API
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item spacing={3} md={3}>
          <Card elevation={0} variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h5">Today's progress</Typography>
              <Typography variant="h2">0%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item spacing={3} md={3}>
          <Card elevation={0} variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h5">Rank</Typography>
              <Typography variant="h2">0</Typography>
              <Typography variant="body1">You haven't started competitive programming yet.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <SideDrawer />
    </div>
  );
};

export default ProgressPage;
