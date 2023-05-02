import React, { Dispatch, ReactNode, SetStateAction } from "react";
import s from "./Tab.module.scss";
import { TabNames } from "../../../features/NavigationTabs/NavigationTabs";

interface TabProps {
     title: string;
     id: TabNames;
     setActiveTab: Dispatch<SetStateAction<TabNames | null>>;
     isActive: boolean;
     children: ReactNode | ReactNode[];
}

const Tab = ({ id, isActive, setActiveTab, title, children }: TabProps) => {
     const onHover = () => {
          setActiveTab(id);
     };
     const onLeave = () => {
          setActiveTab(null);
     };

     return (
          <div className={s.tab} onMouseEnter={onHover} onMouseLeave={onLeave}>
               <div className={`${s.title} ${isActive && s.activeTitle}`}>{title}</div>
               <div className={`${s.body} ${isActive && s.activeBody}`}>{children}</div>
          </div>
     );
};

export default Tab;
