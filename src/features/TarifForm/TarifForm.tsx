import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import s from "./TarifForm.module.scss";
import Slider from "../../components/Slider/Slider";
import { minutes, phonePattern, trafficMarks } from "../../shared";
import { getMinutes, getTraffic } from "../../shared/helpers";
import Dropdown from "../../components/Dropdown/Dropdown";
import { operators } from "../../shared/constants/dropdown";
import { TarrifForm } from "../../shared/types/tarifForm";

const TarifForm = () => {
     const { control, handleSubmit } = useForm();
     const onSubmit = (data: TarrifForm) => {
          const minutes = getMinutes(data.minutes);
          const traffic = getTraffic(data.traffic);
          const phone = data.phone;
          const operator = data.operator;
          console.log({ phone, traffic, minutes, operator });
     };
     const onError = (e: any) => {
          alert("Введите корректные данные");
     };

     return (
          //@ts-ignore
          <form className={s.form} onSubmit={handleSubmit(onSubmit, onError)}>
               <Controller
                    name="phone"
                    control={control}
                    rules={{ required: { value: true, message: "Обязательное поле" }, pattern: { value: phonePattern, message: "Веедите корректный номер" } }}
                    render={({ field: { onChange, value, name }, fieldState: { error, isTouched } }) => (
                         <Input
                              label="Телефон"
                              type="text"
                              id={name}
                              name={name}
                              onChange={onChange}
                              value={value}
                              error={error}
                              isTouched={isTouched}
                              placeholder="+7 (____) ___-__-__"
                         />
                    )}
               />
               <Controller
                    defaultValue={1}
                    name="operator"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, name } }) => (
                         <Dropdown options={operators} label="Оператор" onChange={onChange} value={value} name={name} />
                    )}
               />
               <Controller
                    name="minutes"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, name } }) => (
                         <Slider color="purple" title="Минуты" onChange={onChange} name={name} value={value} marks={minutes} />
                    )}
               />

               <Controller
                    name="traffic"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, name } }) => (
                         <Slider color="black" title="Интернет" onChange={onChange} name={name} value={value} marks={trafficMarks} />
                    )}
               />
               <Button type="submit">
                    <span className={s.buttonBold}>480 ₽</span>
                    <span className={s.buttonLight}>в месяц</span>
               </Button>
          </form>
     );
};

export default TarifForm;
