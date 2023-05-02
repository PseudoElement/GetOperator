import React, { FC, ReactNode } from "react";
import s from "./TabGroup.module.scss";

interface TabGroupProps {
     children: ReactNode | ReactNode[];
}

const TabGroup: FC<TabGroupProps> = ({ children }) => {
     return <div className={s.tabGroup}>{children}</div>;
};

export default TabGroup;
