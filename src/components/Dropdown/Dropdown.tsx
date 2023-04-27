import React, { FC } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import s from "./Dropdowm.module.scss";
import { Option } from "../../shared/types";

interface Dropdown {
     onChange: () => void;
     value: string | number;
     name: string;
     title: string;
     options: Array<Option>;
}

const Dropdown: FC<Dropdown> = ({ onChange, value, name, title, options }) => {
     return (
          <div className={s.wrapper}>
               <p className={s.title}>{title}</p>
               <FormControl className={s.select}>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} onChange={onChange} name={name}>
                         {options.map((option) => (
                              <MenuItem value={option.value}>{option.text}</MenuItem>
                         ))}
                    </Select>
               </FormControl>
          </div>
     );
};

export default Dropdown;
