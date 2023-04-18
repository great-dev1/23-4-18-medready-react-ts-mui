import { useState } from "react";

import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, Menu } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import styles from "./TestPage.styles";

import CustomButton from "src/components/custom/customButton/CustomButton";
import CustomDrawer from "src/components/custom/customDrawer/CustomDrawer";
import CustomLinearProgress from "src/components/custom/customLinearProgress/CustomLinearProgress";

import Injection from "src/assets/images/injection.png";
import QuizIcon from "src/assets/images/quiz-icon.png";

const useStyles = makeStyles(styles);

const quizes: string[] = ["Name of the quiz", "Name of the quiz"];

const answers: string[] = [
  "Loerm ipsum dolor sit amet",
  "Loerm ipsum dolor sit amet",
  "Loerm ipsum dolor sit amet",
  "Loerm ipsum dolor sit amet",
];

const Test = () => {
  const [open, setOpen] = useState<boolean>(true);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.root, {
        [classes.rootDrawerOpen]: open && matches,
      })}
    >
      {!open && (
        <IconButton onClick={() => setOpen(true)}>
          <Menu />
        </IconButton>
      )}

      <CustomDrawer
        open={open}
        className={classes.drawer}
        variant={matches ? "persistent" : "temporary"}
        anchor="left"
      >
        <Box className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>

          <Typography variant="h4" component="h4">
            MedReady Injection Training: Flare Protocol
          </Typography>
        </Box>

        <Box className={classes.drawerProgressBar}>
          <CustomLinearProgress className="drawer-progress-bar" value={0} />
          <Typography>0/4</Typography>
        </Box>

        <Box className={classes.drawerImage}>
          <img src={Injection} alt="injection" />
        </Box>

        <Box className={classes.drawerList}>
          {quizes.map((quiz: string, index: number) => (
            <Box key={index} className="drawer-list-item">
              <img src={QuizIcon} alt="quiz" />
              <Typography>{quiz}</Typography>
            </Box>
          ))}
        </Box>
      </CustomDrawer>

      <Box className={classes.content}>
        <Box className={classes.contentHeader}>
          <Typography
            className={"content-header-title"}
            variant="h2"
            component="h2"
          >
            Name of the quiz activity
          </Typography>

          <Typography className={"content-header-description"}>
            Aenean pulvinar elit neque. Mauris sodales pharetra mi quis
            porttitor
          </Typography>
        </Box>

        <Box className={classes.contentProgressBar}>
          <CustomLinearProgress value={50} />
          <Typography>1 of 2</Typography>
        </Box>

        <Box className={classes.contentQuestion}>
          <Typography className="content-question-no">Question 1</Typography>

          <Typography className="content-question-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation?
          </Typography>
        </Box>

        <Box className={classes.contentAnswer}>
          {answers.map((answer: string, index: number) => (
            <Box key={index}>
              <Typography>{answer}</Typography>
            </Box>
          ))}
        </Box>

        <Box className={classes.contentFooter}>
          <CustomButton>Submit</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Test;
