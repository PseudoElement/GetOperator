import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Option } from "../../shared/types";
import s from "./ImageCheckboxGroup.module.scss";

interface ImageCheckboxGroupProps {
     title: string;
     options: Option[];
     name: string;
     value: string | number;
     onChange: (value: any) => void;
}

const ImageCheckboxGroup: FC<ImageCheckboxGroupProps> = ({ name, onChange, options, title, value }) => {
     const [selectedOptions, setSelectedOptions] = useState<Array<string | number>>([]);

     const handleChange = async (e: ChangeEvent<HTMLInputElement>, optionValue: string | number) => {
          if ((e.target as HTMLInputElement).checked) {
               await setSelectedOptions([...selectedOptions, optionValue]);
          } else {
               await setSelectedOptions(selectedOptions.filter((value) => value !== optionValue));
          }
     };
     useEffect(() => {
          onChange(selectedOptions);
     }, [selectedOptions]);
     return (
          <FormGroup>
               <p className={s.title}>{title}</p>
               <div className={s.imgCheckboxes}>
                    {options.map(({ text, value: optionValue, img }) => (
                         <FormControlLabel
                              className={`${s.wrapper} ${selectedOptions.includes(optionValue) && s.checked}`}
                              key={optionValue}
                              label={text}
                              control={
                                   <Checkbox
                                        icon={<img src={img} alt="unselected" />}
                                        checkedIcon={<img src={img} alt="selected" />}
                                        className={s.field}
                                        name={name}
                                        checked={selectedOptions.includes(optionValue)}
                                        onChange={(e) => handleChange(e, optionValue)}
                                   />
                              }
                         />
                    ))}
               </div>
          </FormGroup>
     );
};

export default ImageCheckboxGroup;
