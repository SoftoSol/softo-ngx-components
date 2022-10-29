import { SafeHtml } from "@angular/platform-browser";
import { RowActionType } from "./table-action.interface";

export interface RowAction{
    icon:SafeHtml;
    type:RowActionType;
    show?:(item:any)=>boolean;
    onClick:(row:any)=>void;
}