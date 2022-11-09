import { ColumnType } from "../enums/column-type.enum"

export interface ColumnConfig{
    title:string;
    type?:ColumnType;
    textAlign?:'left'|'right';
    sortable?:boolean;
    isSearchable?:boolean;
    sortDir?:'asc'|'desc';
    sort?:(item:any)=>string|number|boolean|Date;
    value:(item: any)=>string;
  }