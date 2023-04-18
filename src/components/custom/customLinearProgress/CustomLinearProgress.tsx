import { FC } from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import styles from "./CustomLinearProgress.styles";
const useStyles = makeStyles(styles);

interface Props extends LinearProgressProps {
  className?: string;
  value: number;
}

const CustomLinearProgress: FC<Props> = (props) => {
  const { className, value, ...others } = props;

  const classes = useStyles();
  const classNames = clsx(classes.progress, {
    [className ?? ""]: className,
  });

  return (
    <LinearProgress
      {...others}
      className={classNames}
      variant="determinate"
      color="primary"
      value={value}
    />
  );
};

export default CustomLinearProgress;
