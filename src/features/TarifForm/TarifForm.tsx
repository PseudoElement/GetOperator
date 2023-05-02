import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import s from "./TarifForm.module.scss";
import Slider from "../../components/Slider/Slider";
import { minutes, operators, phonePattern, routerOptions, socials, trafficMarks } from "../../shared";
import { getMinutes, getTraffic } from "../../shared/helpers";
import Dropdown from "../../components/Dropdown/Dropdown";
import { TarifFormData } from "../../shared/types/tarifForm";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import ImageCheckboxGroup from "../../components/ImageCheckboxGroup/ImageCheckboxGroup";
import NavigationTabs from "../NavigationTabs/NavigationTabs";

const TarifForm = () => {
     const { control, handleSubmit } = useForm();
     const onSubmit = (data: TarifFormData) => {
          data.minutes = getMinutes(data.minutes);
          data.traffic = getTraffic(data.traffic);
          console.log(data);
     };
     const onError = (e: any) => {
          alert("Введите корректные данные");
     };

     return (
          //@ts-ignore
          <form className={s.form} onSubmit={handleSubmit(onSubmit, onError)}>
               <h1 className={s.title}>Настройте тариф</h1>
               <div className={s.row}>
                    <NavigationTabs />
               </div>
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
                         defaultValue={"200"}
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
                         defaultValue={"5"}
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

               <div className={s.row}>
                    <Controller
                         defaultValue=""
                         name="socials"
                         control={control}
                         render={({ field: { onChange, value, name } }) => (
                              <ImageCheckboxGroup name={name} value={value} onChange={onChange} options={socials} title="Соцсети" />
                         )}
                    />
               </div>

               <Button type="submit">
                    <span className={s.buttonBold}>480 ₽</span>&nbsp;
                    <span className={s.buttonLight}>в месяц</span>
               </Button>
          </form>
     );
};

export default TarifForm;
