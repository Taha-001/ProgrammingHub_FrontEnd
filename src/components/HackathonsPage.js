import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { drawerWidth } from "./SideDrawer";

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
  info:{
      marginTop:'0.75rem',
  }
});

const hackathonsInfo = [
  {
    id: 1,
    title: "Data Story Telling: Eli Lilly and Company",
    startsOn: "OCT 22, 06:00 PM IST",
    endsOn: "OCT 31, 11:55 PM IST",
    duration: "6H",
    path: "/data story telling.jpg",
    url: "https://assessment.hackerearth.com/challenges/hiring/data-story-telling/",
  },
  {
    id: 2,
    title: "FloBiz Android Developer Hiring Challenge",
    startsOn: "OCT 22, 06:00 PM IST",
    endsOn: "OCT 31, 11:55 PM IST",
    duration: "8H",
    path: "/Flobiz Android Developer.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/flobiz-android-developer-hiring-challenge/",
  },
  {
    id: 3,
    title: "Amazon SDE I & II Hiring Challenge",
    startsOn: "OCT 29, 06:00 PM IST",
    endsOn: "NOV 14, 11:55 PM IST",
    duration: "3H",
    path: "/Amazon.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/amazon-sde-i-ii-hiring-challenge/",
  },
  {
    id: 4,
    title: "HealthifyMe Senior Backend Developer Hiring Challenge",
    startsOn: "OCT 29, 06:00 PM IST",
    endsOn: "NOV 07, 11:55 PM IST",
    duration: "6H",
    path: "/Healthify_Me.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/healthifyme-senior-backend-developer-hiring-challenge/",
  },
  {
    id: 5,
    title: "Clevertap Frontend Engineer Hiring Challenge",
    startsOn: "OCT 29, 06:00 PM IST",
    endsOn: " NOV 14, 11:55 PM IST",
    duration: "45M",
    path: "/clevertap.jpg",
    url: "https://assessment.hackerearth.com/challenges/hiring/clevertap-frontend-engineer-hiring-challenge/",
  },
  {
    id: 6,
    title: "Tara Capital Quant Developer Hiring Challenge",
    startsOn: "OCT 29, 06:00 PM IST",
    endsOn: "NOV 07, 11:55 PM IST",
    duration: "3H",
    path: "/Tara Capital.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/tara-capital-quant-developer-hiring-challenge/",
  },
  {
    id: 7,
    title: "Saviynt Java Engineer Hiring Challenge",
    startsOn: "NOV 05, 06:00 PM IST",
    endsOn: "NOV 14, 11:55 PM IST",
    duration: "3H",
    path: "/Saviynt Java Engineer.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/saviynt-java-engineer-hiring-challenge/",
  },
  {
    id: 8,
    title: "Clevertap Backend Engineer Hiring Challenge",
    startsOn: "OCT 29, 06:00 PM IST",
    endsOn: "NOV 14, 11:55 PM IST",
    duration: "1H",
    path: "/clevertap.jpg",
    url: "https://assessment.hackerearth.com/challenges/hiring/clevertap-backend-engineer-hiring-challenge/",
  },
  {
    id: 9,
    title: "Juspay Developer Hiring challenge 2021",
    startsOn: "OCT 29, 06:00 PM IST",
    endsOn: "OCT 31, 11:55 PM IST",
    duration: "1H 30M",
    path: "/Juspay.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/juspay-developer-hiring-challenge-2021/",
  },
];

const HackathonsPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      {hackathonsInfo.map((item) => {
        return (
          <Grid item sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.path}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body1">STARTS ON</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.startsOn}
                  </Typography>
                  <Typography variant="body1" className={classes.info}>
                    ENDS ON
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.endsOn}
                  </Typography>
                  <Typography variant="body1" className={classes.info}>
                    DURATION
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.duration}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="primary" href={item.url} target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HackathonsPage;
