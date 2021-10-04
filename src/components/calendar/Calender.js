import * as React from "react";
import { Paper, Grid } from "@mui/material";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "../SideDrawer";

const useStyles = makeStyles({
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
  },
});

const appointments = [
  {
    title: "okay",
    startDate: new Date(2021, 9, 29, 12, 0),
    endDate: new Date(2021, 9, 29, 13, 0),
  },
];

const currentDate = new Date();

const Calendar = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer}>
      <Paper>
        <Scheduler data={appointments}>
          <ViewState defaultCurrentDate={currentDate} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
    </Grid>
  );
};
export default Calendar;
