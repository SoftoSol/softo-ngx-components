import { SafeHtml } from "@angular/platform-browser";
import { RowActionType } from "./table-action.interface";

export interface RowAction{
    icon:SafeHtml;
    type:RowActionType;
    tooltip?:string;
    show?:(item:any)=>boolean;
    onClick:(row:any)=>void;
}