import ContentLoader from "react-content-loader";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Spinner(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ContentLoader
        title="Coding..."
        speed={1}
        interval={0.25}
        backgroundColor="var(--gray-100)"
        foregroundColor="var(--accent)"
      >
        <circle cx="10" cy="20" r="7" />
        <rect x="25" y="15" rx="5" ry="5" width="220" height="9" />
        <circle cx="10" cy="50" r="7" />
        <rect x="25" y="45" rx="5" ry="5" width="220" height="9" />
        <circle cx="10" cy="80" r="7" />
        <rect x="25" y="75" rx="5" ry="5" width="220" height="9" />
        <circle cx="10" cy="110" r="7" />
        <rect x="25" y="105" rx="5" ry="5" width="220" height="9" />
      </ContentLoader>
    </div>
  );
}

export default Spinner;
