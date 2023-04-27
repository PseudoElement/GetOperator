import React, { FC } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import s from "./Dropdowm.module.scss";
import { Option } from "../../shared/types";

interface Dropdown {
     onChange: () => void;
     value: string | number;
     name: string;
     label: string;
     options: Array<Option>;
}

const Dropdown: FC<Dropdown> = ({ onChange, value, name, label, options }) => {
     return (
          <FormControl className={s.wrapper}>
               <InputLabel className={s.label} id="demo-simple-select-label">
                    {label}
               </InputLabel>
               <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} label="Age" onChange={onChange} name={name}>
                    {options.map((option) => (
                         <MenuItem value={option.value}>{option.text}</MenuItem>
                    ))}
               </Select>
          </FormControl>
     );
};

export default Dropdown;
