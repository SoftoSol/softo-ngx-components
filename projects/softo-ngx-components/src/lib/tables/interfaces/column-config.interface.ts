import { ColumnType } from "../enums/column-type.enum"

export interface ColumnConfig{
    title:string;
    type?:ColumnType;
    textAlign?:'left'|'right';
    sortable?:boolean;
    sortDir?:'asc'|'desc';
    cssClass?:string;
    sort?:(item:any)=>string|number|boolean|Date;
    value:(item: any)=>string;
  }