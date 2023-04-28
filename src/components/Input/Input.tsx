import React, { FC, useEffect, useState } from "react";
import s from "./Input.module.scss";

interface Input {
     id: string;
     type?: "number" | "email" | "password" | "text";
     placeholder?: string;
     label?: string;
     value: string;
     error: any;
     isTouched: boolean;
     name: string;
     onChange: () => void;
}

const Input: FC<Input> = ({ type = "text", placeholder, id, label, value, error, onChange, name, isTouched }) => {
     return (
          <div className={s.wrapper}>
               {label && (
                    <label className={s.label} htmlFor={id}>
                         {label}
                    </label>
               )}
               <input className={`${s.field}`} name={name} onChange={onChange} value={value} id={id} type={type} placeholder={placeholder} />
               {error && <span className={s.error}>{error.message}</span>}
          </div>
     );
};

export default Input;
