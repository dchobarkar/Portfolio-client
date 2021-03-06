const NavLinkCSS = {
  tab: {
    padding: "1.5rem 0",
    fontSize: "var(--mobView-4)",
    fontWeight: "400",
    listStyleType: "none",
  },

  active: {
    color: "gray",
  },

  // Mobile view
  "@media only screen and (max-width:400px)": {
    tab: {
      "& a:link,a:visited": {
        color: "var(--text-black)",
      },
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    tab: {
      fontSize: "var(--tabView-4)",

      "& a:link,a:visited": {
        color: "var(--text-black)",
      },
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
