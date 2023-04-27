import { Mark } from "../types";
import { Option } from "../types";

export const routerOptions: Option[] = [
     { value: "rent", text: "Аренда 99 ₽/мес " },
     { value: "buy", text: "Выкупить 2600₽" },
];

export const operators: Option[] = [
     { value: 1, text: "Оператор 1" },
     { value: 2, text: "Оператор 2" },
     { value: 3, text: "Оператор 3" },
];

export const minutes: Array<Mark> = [
     {
          value: 0,
          label: "200 min",
     },
     {
          value: 33.333,
          label: "350",
     },
     {
          value: 88.889,
          label: "600",
     },
     {
          value: 100,
          label: "650",
     },
];
export const trafficMarks = [
     {
          value: 0,
          label: "5 Gb",
     },
     {
          value: 33.333,
          label: "15",
     },
     {
          value: 83.333,
          label: "30",
     },
     {
          value: 100,
          label: "35",
     },
];
