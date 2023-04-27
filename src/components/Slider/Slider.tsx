import { Slider as SliderMUI } from "@mui/material";
import React, { FC } from "react";
import { Mark } from "../../shared/types";
import s from "./Slider.module.scss";

interface Slider {
     marks: Array<Mark>;
     value?: any;
     name?: string;
     onChange?: () => void;
     color?: "black" | "purple";
     title?: string;
}

const Slider: FC<Slider> = ({ marks, value, name, onChange, color = "purple", title }) => {
     return (
          <div className={s.wrapper}>
               {title && <p className={s.title}>{title}</p>}
               <SliderMUI
                    className={`${s.slider} ${s[color]}`}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => {
                         const mark = marks.find((m) => m.value === value);
                         return mark ? mark.label : "";
                    }}
                    onChange={onChange}
                    name={name}
                    value={value}
                    marks={marks}
                    step={null}
               />
          </div>
     );
};

export default Slider;
