import React from "react";
import SideDrawer from "./SideDrawer";
import TopNavigationBar from "./TopNavigationBar";
import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "./SideDrawer";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
  },
  h2:{
      paddingLeft:"1rem",
  }
});

const Groups = () => {
  const classes = useStyles();

  return (
    <div>
      <TopNavigationBar />
      <Grid container className={classes.gridContainer}>
        <h2 className={classes.h2}>You haven't been added to any groups yet.</h2>
      </Grid>
      <SideDrawer />
    </div>
  );
};

export default Groups;
