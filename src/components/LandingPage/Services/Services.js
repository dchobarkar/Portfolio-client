import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import ServiceCard from "../../../CustomComponents/ServiceCard/ServiceCard";
import ServicesList from "./Services.list";
import ServicesCSS from "./Service.css";

//CSS
const useStyles = makeStyles({ ...ServicesCSS });

// Driver component
function Services(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        {ServicesList.map((service) => (
          <ServiceCard key={service.service} {...service} />
        ))}
      </div>

      <Link className={classes.link} to="/services">
        More
      </Link>
    </section>
  );
}

export default Services;
