import { IconType } from "react-icons/lib";


///////////// - Grid - ///////////// 
export type itensProp = {
    desc: string,
    amount: string,
    expense: Boolean,
    id: number,
}



export type prop = {
    itens: itensProp[];
    setItens: Function;
}

///////////// - Resume - ///////////// 

export type status = {
    income: number,
    expense: number,
    total: number
}

export type resumes = {
    title: string,
    Icon: IconType,
    value: any
}
