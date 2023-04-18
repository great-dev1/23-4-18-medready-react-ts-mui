import { Theme } from "@mui/system";

const DrawerWidth = "360px";

const testPageStyle = (theme: Theme) => ({
  root: {
    display: "flex",

    "& .MuiIconButton-root": {
      position: "absolute",
      width: "32px",
      height: "32px",
    },
  },

  rootDrawerOpen: {
    [theme.breakpoints.up("md")]: {
      marginLeft: DrawerWidth,
    },
  },

  drawer: {
    flexShrink: 0,

    "& .MuiDrawer-paper": {
      width: DrawerWidth,
      padding: "24px 32px",
      border: 0,
      backgroundColor: "#0f2e4d5",
      boxShadow: "0px 0px 20px rgba(172, 172, 172, 0.15)",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "8px",

    "& .MuiIconButton-root": {
      position: "static",
      width: "32px",
      height: "32px",
    },

    "& .MuiTypography-root": {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "23.4px",
      letterSpacing: -1,
    },
  },
  drawerProgressBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    height: "30px",
    marginBottom: "8px",

    "& .drawer-progress-bar": {
      height: "8px",
      backgroundColor: "#F6F6F6",
      borderRadius: "110px",
    },

    "& .MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "100%",
    },
  },
  drawerImage: {
    marginBottom: "20px",
  },
  drawerList: {
    marginBottom: "20px",

    "& .drawer-list-item": {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      gap: "8px",
      height: "50px",

      "& .MuiTypography-root": {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "150%",
        letterSpacing: "-0.015em",
      },
    },
  },

  content: {
    "&.MuiBox-root": {
      padding: "105px 24px",
      [theme.breakpoints.down("md")]: {
        padding: "88px 40px",
      },
    },
  },
  contentHeader: {
    marginBottom: "30px",

    "& .content-header-title": {
      height: "34px",

      "&.MuiTypography-root": {
        marginBottom: "8px",
        fontSize: "28px",
        fontWeight: "600",
        lineHeight: "120%",
        letterSpacing: "0.0025em",
      },
    },
    "& .content-header-description": {
      height: "27px",

      "&.MuiTypography-root": {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "170%",
        letterSpacing: "-0.015em",
      },
    },
  },
  contentProgressBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "20px",
    height: "21px",
    marginBottom: "20px",

    "&.MuiTypography-root": {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "150%",
      letterSpacing: "0.01em",
    },
  },
  contentQuestion: {
    "& .content-question-no": {
      marginBottom: "20px",

      "&.MuiTypography-root": {
        fontSize: "22px",
        fontWeight: "700",
        lineHeight: "130%",
        letterSpacing: "-0.01em",
      },
    },
    "& .content-question-description": {
      marginBottom: "20px",

      "&.MuiTypography-root": {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "27px",
        letterSpacing: "-0.015em",
      },
    },
  },
  contentAnswer: {
    marginBottom: "20px",

    "& .MuiBox-root": {
      marginBottom: "8px",
      padding: "15px",
      borderRadius: "16px",
      backgroundColor: "#FBFBFC",
    },

    "& .MuiTypography-root": {
      height: "27px",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "170%",
      letterSpacing: "-0.015em",
    },
  },
  contentFooter: {
    display: "flex",
    justifyContent: "end",
  },
});

export default testPageStyle;
