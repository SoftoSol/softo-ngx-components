import { SafeHtml } from "@angular/platform-browser"

export interface TableAction{
    icon:SafeHtml
    type:TableActionType
    onClick:(row:any)=>void
}

export enum TableActionType {
    Danger, 
    Warning, 
    Info
}