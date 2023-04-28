import React, { FC } from "react";
import s from "./CheckboxGroup.module.scss";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Option } from "../../shared/types";

interface CheckboxGroupProps {
     title: string;
     options: Option[];
     value: string | number;
     onChange: (value: any) => void;
     name: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ title, name, onChange, options, value }) => {
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
