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

const appointments = [
  {
    title: "okay",
    startDate: new Date(2021, 9, 29, 12, 0),
    endDate: new Date(2021, 9, 29, 13, 0),
  },
];

const currentDate = new Date();

export default () => (
  <Grid
    direction="column"
    justifyContent="flex-end"
    alignItems="center"
    xs={12}
  >
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
