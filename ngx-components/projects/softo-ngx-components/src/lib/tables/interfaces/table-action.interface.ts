import { SafeHtml } from "@angular/platform-browser"

export interface TableAction{
    icon:SafeHtml
    type:TableActionType
    onClick:(row:any)=>void
}
export interface TableButton{
    label:string;
    classes?:string;
    onClick:()=>void
}


export enum TableActionType {
    Danger, 
    Warning, 
    Info
}