import { ColumnType } from "../enums/column-type.enum"

export interface ColumnConfig {
  title: string;
  type?: ColumnType;
  textAlign?: 'left' | 'right';
  sortable?: boolean;
  sortDir?: 'asc' | 'desc';
  cssClass?: string;
  /// defines width % of the column
  width?: number;
  /// if colspan is defined, the column will span across the specified number of columns
  /// if colspan is not defined, the column will span across single column
  //colSpan?:(item:any)=>number;
  sort?: (item: any) => string | number | boolean | Date;
  value: (item: any) => string | number | boolean | Date;
  display?: (item: any) => string;
}