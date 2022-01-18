import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "2vh 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "5px 10px",
  },
  headingWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    width: "65%",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "1%",
  },
  rightSection: {
    width: "35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  rightSectionContainer: {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  anchorStyle: {
    textDecoration: "none",
    color: "inherit",
  },
  item: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "rgba(0,183,255, 1)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    containerGrid: {
      flexDirection: "column-reverse",
    },
  },
}));
