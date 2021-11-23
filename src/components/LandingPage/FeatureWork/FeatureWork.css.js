const FeatureWorkCSS = {
  root: {
    minHeight: "var(--mob-minHeight)",
    padding: "20px 30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6EFED",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      minHeight: "var(--tab-minHeight)",
      padding: "0px 60px",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      minHeight: "var(--des-minHeight)",
      padding: "0px 120px",
    },
  },
};

export default FeatureWorkCSS;
