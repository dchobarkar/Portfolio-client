const NavLinkCSS = {
  tab: {
    padding: "2rem 0",
    fontWeight: "400",
    fontSize: "var(--mobView-4)",
    listStyleType: "none",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    tab: {
      fontSize: "var(--tabView-4)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    tab: {
      padding: "0px 1rem",
      fontSize: "var(--desView-4)",
    },
  },
};

export default NavLinkCSS;
