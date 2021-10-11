import React, { Fragment, useState, useEffect, useRef } from "react";
import { Avatar, Divider, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import {
  AppBar,
  Toolbar,
  MenuItem,
  MenuList,
  Paper,
  ClickAwayListener,
  Popper,
  Grow,
} from "@material-ui/core";
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
  menu: {
    zIndex: 1,
  },
});
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

const TopNavigationBar = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const history = useHistory();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const logout = () => {
    history.push("/");
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
          <Avatar
            style={{ marginLeft: "auto", background: "grey" }}
            onClick={handleToggle}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
          >
            U
          </Avatar>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            className={classes.menu}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
      <Divider />
    </Fragment>
  );
};

export default TopNavigationBar;
