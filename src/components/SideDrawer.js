import { Drawer } from "@mui/material";
import React from "react";
import LaptopChromebookSharpIcon from "@material-ui/icons/LaptopChromebookSharp";
import {
  AssessmentOutlined,
  CheckCircleOutlineSharp,
  DeveloperMode,
  EventSharp,
  Group,
  ImportantDevices,
} from "@material-ui/icons";
import { indigo } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import {
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

export const drawerWidth = 250;

const useStyles = makeStyles({
  active: {
    borderRight: "4px solid rgb(63, 81, 181)",
    background: indigo[50],
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    paddingLeft: "1.25rem",
    paddingTop: "0.5rem",
  },
});

const SideDrawer = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      id: 1,
      text: "Learn",
      path: "/learn",
      icon: <LaptopChromebookSharpIcon />,
    },
    {
      id: 2,
      text: "Progress",
      path: "/progress",
      icon: <CheckCircleOutlineSharp />,
    },
    {
      id: 3,
      text: "Calendar",
      path: "/calendar",
      icon: <EventSharp />,
    },
    {
      id: 4,
      text: "Hackathons",
      path: "/hackathons",
      icon: <ImportantDevices />,
    },
    {
      id: 5,
      text: "Groups",
      path: "/groups",
      icon: <Group />,
    },
    {
      id: 6,
      text: "Leaderboard",
      path: "/leaderboard",
      icon: <AssessmentOutlined />,
    },
    {
      id: 7,
      text: "Practice",
      path: "/practice",
      icon: <DeveloperMode />,
    },
  ];
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Programming Hub
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                key={item.id}
                button
                onClick={() => history.push(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
