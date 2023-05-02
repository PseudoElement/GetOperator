import React, { Dispatch, SetStateAction } from "react";
import s from "./TabTitle.module.scss";

interface TabTitleProps {
     title: string;
     id: string;
     setActiveTab: Dispatch<SetStateAction<any>>;
     isActive: boolean;
}

const TabTitle = ({ title, isActive, setActiveTab, id }: TabTitleProps) => {
     const onHover = () => {
          console.log(1);
          setActiveTab(id);
     };
     const onLeave = () => {
          console.log(2);
          setActiveTab(null);
     };

     return (
          <div onMouseEnter={onHover} onMouseLeave={onLeave} className={`${s.tabTitle} ${isActive && s.active}`}>
               {title}
          </div>
     );
};

export default TabTitle;
