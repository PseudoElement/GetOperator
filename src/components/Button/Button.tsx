import React, { FC, ReactNode } from "react";
import s from "./Button.module.scss";

interface Button {
     onClick?: () => void;
     children: ReactNode | ReactNode[];
     type?: "submit" | "reset";
}

const Button: FC<Button> = ({ onClick, children, type = "submit" }) => {
     return (
          <button type={type} className={s.button} onClick={onClick}>
               {children}
          </button>
     );
};

export default Button;
