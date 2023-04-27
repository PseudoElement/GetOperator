import { minutes, trafficMarks } from "../constants";

export const getMinutes = (value: string | number): string => {
     const labelValue = minutes.find((el) => el.value === value)?.label;
     return labelValue ?? "200";
};
export const getTraffic = (value: string | number): string => {
     const labelValue = trafficMarks.find((el) => el.value === value)?.label;
     return labelValue ?? "5";
};
