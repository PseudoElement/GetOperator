import React, { ReactNode } from "react";
import s from "./TabBody.module.scss";

interface TabBodyProps {
     children: ReactNode | ReactNode[];
     isActive: boolean;
     className?: string;
}

const TabBody = ({ children, isActive, className }: TabBodyProps) => {
     if (!isActive) return null;
     return <div className={`${s.tabBody} ${className && s[className]}`}>{children}</div>;
};

export default TabBody;
