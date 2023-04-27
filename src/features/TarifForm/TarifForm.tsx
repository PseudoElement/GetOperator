import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import s from "./TarifForm.module.scss";
import Slider from "../../components/Slider/Slider";
import { minutes, operators, phonePattern, routerOptions, trafficMarks } from "../../shared";
import { getMinutes, getTraffic } from "../../shared/helpers";
import Dropdown from "../../components/Dropdown/Dropdown";
import { TarrifForm } from "../../shared/types/tarifForm";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";

const TarifForm = () => {
     const { control, handleSubmit } = useForm();
     const onSubmit = (data: TarrifForm) => {
          const minutes = getMinutes(data.minutes);
          const traffic = getTraffic(data.traffic);
          const phone = data.phone;
          const operator = data.operator;
          const router = data.router;
          console.log({ phone, traffic, minutes, operator, router });
     };
     const onError = (e: any) => {
          alert("Введите корректные данные");
     };

     return (
          //@ts-ignore
          <form className={s.form} onSubmit={handleSubmit(onSubmit, onError)}>
               <h1 className={s.title}>Настройте тариф</h1>
               <div className={s.row}>
                    <p className={s.rowTitle}>Телефон</p>
                    <Controller
                         name="phone"
                         control={control}
                         rules={{
                              required: { value: true, message: "Обязательное поле" },
                              pattern: { value: phonePattern, message: "Веедите корректный номер" },
                         }}
                         render={({ field: { onChange, value, name }, fieldState: { error, isTouched } }) => (
                              <Input
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
               </div>

               <div className={s.row}>
                    <Controller
                         defaultValue={1}
                         name="operator"
                         control={control}
                         rules={{ required: true }}
                         render={({ field: { onChange, value, name } }) => (
                              <Dropdown options={operators} title="Оператор" onChange={onChange} value={value} name={name} />
                         )}
                    />
               </div>

               <div className={s.row}>
                    <Controller
                         name="minutes"
                         control={control}
                         rules={{ required: true }}
                         render={({ field: { onChange, value, name } }) => (
                              <Slider color="purple" title="Минуты" onChange={onChange} name={name} value={value} marks={minutes} />
                         )}
                    />
               </div>

               <div className={s.row}>
                    <Controller
                         name="traffic"
                         control={control}
                         rules={{ required: true }}
                         render={({ field: { onChange, value, name } }) => (
                              <Slider color="black" title="Интернет" onChange={onChange} name={name} value={value} marks={trafficMarks} />
                         )}
                    />
               </div>

               <div className={s.row}>
                    <Controller
                         defaultValue=""
                         name="router"
                         control={control}
                         rules={{ required: true }}
                         render={({ field: { onChange, value, name } }) => (
                              <CheckboxGroup name={name} onChange={onChange} value={value} title="Wi-Fi роутер" options={routerOptions} />
                         )}
                    />
               </div>

               <Button type="submit">
                    <span className={s.buttonBold}>480 ₽</span>
                    <span className={s.buttonLight}>в месяц</span>
               </Button>
          </form>
     );
};

export default TarifForm;
