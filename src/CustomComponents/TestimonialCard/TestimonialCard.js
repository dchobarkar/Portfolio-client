import React from "react";
import { makeStyles } from "@material-ui/styles";

import TestimonialCardCSS from "./TestimonialCard.css";

// CSS
const useStyles = makeStyles({ ...TestimonialCardCSS });

// Driver component
function TestimonialCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.comment}>"{props.comment}"</h2>

      <img className={classes.image} alt={props.name} src={props.imgURL} />

      <p className={classes.name}>{props.name}</p>

      <p className={classes.websiteURL}>{props.websiteURL}</p>
    </div>
  );
}

export default TestimonialCard;
