import React, { FC, useEffect } from "react";
import s from "./CheckboxGroup.module.scss";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Option } from "../../shared/types";

interface CheckboxGroup {
     title: string;
     options: Option[];
     value: string | number;
     onChange: (value: any) => void;
     name: string;
}

const CheckboxGroup: FC<CheckboxGroup> = ({ title, options, value, onChange, name }) => {
     useEffect(() => {
          console.log("name", name);
          console.log("VALUE", value);
     }, [value]);
     return (
          <FormGroup>
               <p className={s.title}>{title}</p>
               <div className={s.checkboxes}>
                    {options.map(({ text, value: optionValue }) => (
                         <FormControlLabel
                              className={s.wrapper}
                              key={optionValue}
                              label={text}
                              control={
                                   <Checkbox
                                        color="secondary"
                                        className={s.field}
                                        name={name}
                                        checked={value === optionValue}
                                        onChange={(e) => {
                                             onChange(e.target.checked ? optionValue : "");
                                        }}
                                   />
                              }
                         />
                    ))}
               </div>
          </FormGroup>
     );
};

export default CheckboxGroup;
