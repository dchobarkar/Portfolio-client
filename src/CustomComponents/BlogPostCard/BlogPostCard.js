import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import { BlogPostCardCSS } from "./BlogPostCard.css";

// CSS
const useStyles = makeStyles({ ...BlogPostCardCSS });

function BlogPostCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.blogPostContainer}>
        <h1 className={classes.header}>{props.heading}</h1>

        <div className={classes.blogDetails}>
          <img alt={props.author} src={props.authorImg} />
          <p>
            by {props.author} | {props.date}
          </p>
        </div>

        <p className={classes.abstract}>{props.abstract}</p>

        <Link className={classes.link} to={props.link}>
          Read Article
        </Link>
      </div>

      <hr className={classes.hr} />
    </div>
  );
}

export default BlogPostCard;
