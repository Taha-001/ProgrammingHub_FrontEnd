import React from "react";
import { drawerWidth } from "./SideDrawer";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "100%",
  },
  media: {
    height: 200,
  },
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
    paddingLeft: "1rem",
  },
  info: {
    marginTop: "0.75rem",
  },
});

const practiceCardItems = [
  {
    id: 1,
    title: "Interview Preparation Questions",
  },
  {
    id: 2,
    title: "Solve Questions on Algorithms",
  },
  {
    id: 3,
    title: "Solve Questions on Dynamic Programming",
  },
  {
    id: 4,
    title: "Solve Questions on Data Structures",
  },
  {
    id: 5,
    title: "Solve Questions on the Greedy Method",
  },
];

const PracticePage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      {practiceCardItems.map((item) => {
        return (
          <Grid item sm={4} key={item.id}>
            <Card className={classes.root} elevation={2} variant="outlined">
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="primary">Solve</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PracticePage;
