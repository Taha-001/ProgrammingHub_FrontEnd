import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
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
  <Paper>
    <Scheduler data={appointments}>
      <ViewState currentDate={currentDate} />
      <MonthView />
      <Appointments />
    </Scheduler>
  </Paper>
);
