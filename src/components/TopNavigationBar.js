import React,{Fragment} from "react";
import { Avatar, Divider, makeStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { AppBar, Toolbar } from "@material-ui/core";
import { drawerWidth } from "./SideDrawer";



const useStyles = makeStyles({
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    backgroundColor: "#FFFFFF",
  },
  chip: {
    marginRight: "1.5rem",
  },
});

const TopNavigationBar = () => {
  const chips = [
    {
      name: "All",
    },
    // {
    //   name: "Design",
    // },
    {
      name: "Web Development",
    },
    {
      name: "App Development",
    },
    {
      name: "Competitive Programming",
    },
    {
      name: "Machine Learning",
    },
    {
      name: "Artificial Intelligence",
    },
  ];
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar>
          {chips.map((chip) => {
            return (
              <Chip
                label={chip.name}
                className={classes.chip}
                color="primary"
              />
            );
          })}
          <Avatar style={{ marginLeft: "auto", background: "grey" }}>U</Avatar>
        </Toolbar>
      </AppBar>
      <Divider/>
    </Fragment>
  );
};

export default TopNavigationBar;
