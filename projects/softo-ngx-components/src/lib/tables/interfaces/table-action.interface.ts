import { SafeHtml } from "@angular/platform-browser"


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