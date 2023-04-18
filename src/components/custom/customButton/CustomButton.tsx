import React, { FC, ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import styles from "./CustomButton.styles";
const useStyles = makeStyles(styles);

interface Props extends ButtonProps {
  children?: ReactNode;
  className?: string;  
}

const CustomButton: FC<Props> = (props) => {
  const { children, className, ...others } = props;

  const classes = useStyles();
  const classNames = clsx(classes.btn, {
    [className ?? ""]: className,
  });

  return (
    <Button {...others} className={classNames}>
      {children}
    </Button>
  );
};

export default CustomButton;
