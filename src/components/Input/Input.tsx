import React, { FC, useEffect, useState } from "react";
import s from "./Input.module.scss";

interface Input {
     id: string;
     type?: "number" | "email" | "password" | "text";
     placeholder?: string;
     label: string;
     value: string;
     error: any;
     isTouched: boolean;
     name: string;
     onChange: () => void;
}

const Input: FC<Input> = ({ type = "text", placeholder, id, label, value, error, onChange, name, isTouched }) => {
     const [active, setActive] = useState(false);

     const onFocus = () => {
          setActive(true);
     };

     useEffect(() => {
          console.log("ERROR", error);
     }, [error]);
     return (
          <div className={s.wrapper}>
               <label className={s.label} htmlFor={id}>
                    {label}
               </label>
               <input
                    className={`${s.field} ${active && s.active} ${error && s.errorField}`}
                    name={name}
                    onFocus={onFocus}
                    onChange={onChange}
                    value={value}
                    id={id}
                    type={type}
                    placeholder={placeholder}
               />
               {error && <span className={s.error}>{error.message}</span>}
          </div>
     );
};

export default Input;
