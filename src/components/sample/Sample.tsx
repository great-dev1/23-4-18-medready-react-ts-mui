import { FC, ReactNode } from "react";

import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import styles from "./Sample.styles";
const useStyles = makeStyles(styles);

interface Props {
  children?: ReactNode;
  className?: string;
}

const Sample: FC<Props> = (props) => {
  const { children, className } = props;

  const classes = useStyles();
  const classNames = clsx(classes.sample, {
    [className ?? ""]: className,
  });

  return (
    <div className={classNames}>
      <span>{children}</span>
    </div>
  );
};

export default Sample;
