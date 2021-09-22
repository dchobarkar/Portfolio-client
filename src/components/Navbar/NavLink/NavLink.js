import React from "react";
import clsx from "clsx";
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { NavLinkCSS } from "./NavLink.css";

// CSS
const useStyles = makeStyles({ ...NavLinkCSS });

function NavLink({ label, to, onClick }) {
  const classes = useStyles();

  // Flag variable to check active status of link
  const match = useRouteMatch({ path: to });

  return (
    <li
      className={match ? clsx(classes.tab, classes.active) : classes.tab}
      onClick={onClick}
    >
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default NavLink;
