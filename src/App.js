import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import memories from "./images/memories.png";
import githubIcon from "./images/github.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { fetchAllPosts } from "./features/Posts/postSlice";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.headingWrapper}>
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </div>
        <div className={classes.rightSection}>
          <div className={classes.rightSectionContainer}>
            <a
              href="https://github.com/amandal97/memories-project-client"
              target="_blank"
              className={classes.anchorStyle}>
              <div className={classes.item}>
                <img src={githubIcon} alt="memories" height="20" width="20" />
                <Typography style={{ marginLeft: "3px" }} variant="body2">
                  memories-client
                </Typography>
              </div>
            </a>
            <a
              href="https://github.com/amandal97/memories-project-server"
              target="_blank"
              className={classes.anchorStyle}>
              <div className={classes.item}>
                <img src={githubIcon} alt="memories" height="20" width="20" />

                <Typography style={{ marginLeft: "3px" }} variant="body2">
                  memories-server
                </Typography>
              </div>
            </a>
          </div>
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.containerGrid}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
