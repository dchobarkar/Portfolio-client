import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import { ReactComponent as DownArrowIcon } from "../../Assets/svg/DownArrow.svg";
import { ReactComponent as UpArrowIcon } from "../../Assets/svg/UpArrow.svg";

// CSS
const useStyles = makeStyles({
  root: {
    width: "100vw",
  },
  question: {
    width: "100%",
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "2rem",
    fontSize: "1.25rem",
    textAlign: "left",
    borderBottom: "1px solid var(--gray-300)",
    transition: "all 0.5s ease",

    "&:hover": {
      color: "var(--secondary)",
      transition: "all 0.5s ease",
    },
  },
  icon: {
    width: "15px",
    height: "15px",
    position: "relative",
    top: "17px",
    left: "10px",
  },

  answerBox: {
    height: "0px",
    padding: "2rem",
    marginBottom: "3rem",
    opacity: 0,
    fontSize: "1.1rem",
    lineHeight: "2rem",
    transition: "all 0.5s ease",
  },

  open: {
    height: "100%",
    display: "block",
    opacity: 1,
    transition: "all 0.5s ease",
  },
  close: {
    height: "100%",
    display: "none",
    opacity: 1,
    transition: "all 0.5s ease",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      width: "65vw",
    },
    question: {
      width: "100%",
      fontSize: "1.5rem",
    },
  },
  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      width: "65vw",
    },
    question: {
      width: "100%",
      fontSize: "1.5rem",
    },
  },
});

function Accordion(props) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.question} onClick={() => setIsOpen(!isOpen)}>
        <p> {props.que}</p>
        {isOpen ? (
          <UpArrowIcon className={classes.icon} />
        ) : (
          <DownArrowIcon className={classes.icon} />
        )}
      </div>

      <div
        className={clsx(
          classes.answerBox,
          isOpen ? classes.open : classes.close
        )}
      >
        <p>{props.ans}</p>
      </div>
    </div>
  );
}

export default Accordion;
