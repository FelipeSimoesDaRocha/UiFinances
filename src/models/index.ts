import { IconType } from "react-icons/lib";


export type propers = {
    handleAdd: Function,
    transactionsList: itensProp[],
    setTransactionsList: Function
}

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
    income: string,
    expense: string,
    total: string
}

export type resumes = {
    title: string,
    Icon: IconType,
    value: any
}


