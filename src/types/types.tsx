export interface ITodoItem {
    id: number;
    title: string;
    isDone: boolean;
}

export interface InputConponentProps{
    onInputChange:(value:string)=>void;
    onPressEnter:(e:React.KeyboardEvent<HTMLInputElement>)=>void;
    value:string;
}