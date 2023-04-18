import React, { FC, ReactNode } from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";

import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import styles from "./CustomDrawer.styles"
const useStyles = makeStyles(styles);

interface Props extends DrawerProps {
  children?: ReactNode;
  className?: string;
}

const CustomDrawer: FC<Props> = (props) => {
  const { children, className, ...others } = props;

  const classes = useStyles();
  const classNames = clsx(classes.btn, {
    [className ?? ""]: className,
  });

  return (
    <Drawer {...others} className={classNames}>
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
