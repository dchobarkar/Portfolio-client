const IntroCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
    padding: "0px 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontFamily: "'Dosis',sans-serif",
    fontSize: "var(--mobView-1)",
    fontWeight: "700",
    textAlign: "center",
    color: "#96FECB",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
      padding: "0px 60px",
    },

    header: {
      fontSize: "var(--tabView-1)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "var(--des-minHeight)",
      padding: "0px 120px",
    },

    header: {
      fontSize: "var(--desView-1)",
    },
  },
};

export default IntroCSS;
