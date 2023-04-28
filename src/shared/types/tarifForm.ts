export interface TarifFormData {
     operator: string | number;
     phone: string;
     minutes: string;
     traffic: string;
     router: string;
}
export interface Option {
     value: number | string;
     text: string;
     img?: string;
}

export interface Mark {
     value: number;
     label: string;
}
