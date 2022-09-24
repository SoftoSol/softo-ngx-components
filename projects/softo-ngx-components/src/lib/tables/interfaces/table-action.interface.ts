import { SafeHtml } from "@angular/platform-browser"

export interface RowAction{
    icon:SafeHtml
    type:RowActionType
    onClick:(row:any)=>void
}
export interface TableButton{
    label:string;
    classes?:string;
    onClick:()=>void
}


export enum RowActionType {
    Danger, 
    Warning, 
    Info
}