import { Theme } from "@mui/system";

const linearProgressStyles = (theme: Theme) => ({
  progress: {
    "&.MuiLinearProgress-root": {
      width: "347px",
      height: "8px",
      backgroundColor: "#E6F1F6",
      borderRadius: "110px",
    },
  },
});

export default linearProgressStyles;
