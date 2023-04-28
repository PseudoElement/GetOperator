import { Mark, Option } from "../types";
import Facebook from "../../public/svg/Facebook.svg";
import VK from "../../public/svg/VK.svg";
import OK from "../../public/svg/OK.svg";
import Inst from "../../public/svg/Inst.svg";
import TikTok from "../../public/svg/TikTok.svg";

export const routerOptions: Option[] = [
     { value: "rent", text: "Аренда 99 ₽/мес" },
     { value: "buy", text: "Выкупить 2600₽" },
];

export const socials: Option[] = [
     { value: "facebook", text: "20 ₽", img: Facebook },
     { value: "vk", text: "20 ₽", img: VK },
     { value: "ok", text: "20 ₽", img: OK },
     { value: "instagramm", text: "60 ₽", img: Inst },
     { value: "tiktok", text: "60 ₽", img: TikTok },
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
export const trafficMarks: Array<Mark> = [
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
