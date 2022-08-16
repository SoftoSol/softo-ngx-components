import { ColumnType } from "../enums/column-type.enum"

export interface ColumnConfig{
    title:string
    type:ColumnType
    textAlign:'left'|'right'
    sortable:boolean
    value:(item: any)=>string
  }