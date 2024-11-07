// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, Input } from "@angular/core";

import { SafeHtml } from "@angular/platform-browser";
import {
  ColumnConfig,
  RowAction,
  RowActionType,
  TableButton,
} from "../interfaces";
import { PageEvent } from "@angular/material/paginator";
import { ColumnType } from "../enums";

interface PaginationConfig {
  size: number;
  index: number;
  sizes: number[];
  length: number;
}

@Component({
  selector: "softo-table-sortable",
  templateUrl: "table-sortable.component.html",
  styleUrls: ["table-sortable.component.css"],
})
export class TableSortableComponent implements OnInit {
  //#region INPUTS
  @Input() public title: string = "";
  @Input() public noDataMessage: string = "";
  @Input() public searchText: string = "";
  @Input() public showFilter: boolean = false;
  @Input() public dataLoadingMessage: string = "";

  /// used to show three dots dropdown at the end of the row
  /// this menu is used to show actions for each row
  /// this menu is useful when actions are more than 2
  @Input() public showActionsDropdown: boolean = true;
  @Input() public set headerRow(row: ColumnConfig[]) {
    // if there is no data, return
    if (!row) return;
    // clear previous header configuration
    this.header = [];
    // set default configuration and add to header
    row?.forEach((col) => {
      // if sortable is undefined but sort function is defined, set sortable to true
      if (col.sortable == undefined && col.sort != undefined)
        col.sortable = true;

      // column type is undefined, set to Text
      if (!col.type) col.type = this.ColumnType.Text;

      // if column type is undefined, set to Text
      if (!col.textAlign) col.textAlign = "left";

      //// if cssClass is undefined, set to empty string
      if (!col.cssClass) col.cssClass = "";

      // if value is not defined, set to default
      if (!col.value) col.value = (item: any) => item[col.title];

      // if colSpan is undefined, set to 1
      //if (!col.colSpan) col.colSpan = (item:any)=>1;

      // add column to header
      this.header.push(col);
    });
  }
  @Input() public footer: string[] = [];
  @Input() public rowActions: RowAction[] = [];
  @Input() public icon: string | null = null;
  @Input() public tableActions: TableButton[] = [];
  @Input() public loading: boolean = false;
  @Input() public set dataRows(value: string[][]) {
    this._dataRows = value;
    this.config.length = this._dataRows?.length ?? 0;
    this._getData();
  }
  //#endregion

  //#region PROPERTIES
  private _dataRows: string[][] = [];
  public header: ColumnConfig[] = [];
  public rows: string[][] = [];
  public config: PaginationConfig;
  ColumnType = ColumnType;
  //#endregion

  ngOnInit() {
    this._getData();
  }

  constructor() {
    this.config = {
      length: 0,
      index: 0,
      size: 10,
      sizes: [10, 25, 100],
    };
  }
  //#region UI Functions
  // this method determines classes for each column head
  colHeadClass(column: ColumnConfig): string {
    if (column.type == this.ColumnType.Html) return "";
    return "";
  }

  sortData(column: ColumnConfig) {
    if (!column.sortable) return;
    // remove sort from other columns
    this.header.forEach((col) => {
      if (col != column) col.sortDir = undefined;
    });
    // sort data
    if (column.sortDir == "asc") {
      this._sortAsc(column);
      column.sortDir = "desc";
    } else {
      this._sortDesc(column);
      column.sortDir = "asc";
    }
    this._getData();
  }
  private _sortAsc(column: ColumnConfig): void {

    this._dataRows.sort((a, b) => {
      let aVal: string | Date | boolean | number = column.value(a);
      let bVal: string | Date | boolean | number = column.value(b);
      // debugger
      // check if the custom sort is configured
      if (column.sort) {
        aVal = column.sort(aVal);
        bVal = column.sort(bVal);
      };
      // aVal and bVal are dates
      if (typeof aVal == typeof (new Date()) && typeof bVal == typeof (new Date())) {
        if (column.sort) return (aVal as Date).getTime() - (bVal as Date).getTime();
        return new Date(aVal as string).getTime() - new Date(bVal as string).getTime();
      }
      if (aVal > bVal) return 1;
      if (aVal < bVal) return -1;
      return 0;

    });
    this._getData();
  }

  private _sortDesc(column: ColumnConfig): void {
    this._dataRows.sort((a, b) => {
      let aVal: string | Date | boolean | number = column.value(a);
      let bVal: string | Date | boolean | number = column.value(b);
      if (column.sort) {
        aVal = column.sort(aVal);
        bVal = column.sort(bVal);
      };
      if (typeof aVal == typeof (new Date()) && typeof bVal == typeof (new Date())) {
        if (column.sort) return (bVal as Date).getTime() - (aVal as Date).getTime();
        return new Date(bVal as string).getTime() - new Date(aVal as string).getTime();
      }
      if (aVal > bVal) return -1;
      if (aVal < bVal) return 1;
      return 0;

    });
    this._getData();
  }
  //#endregion

  //#region DATA TABLE METHODS
  // this function gets data from dataRows and set data into rows to show table
  private _getData(): void {
    const startAt = this.config.index * this.config.size;
    this.rows = this._dataRows?.slice(startAt, startAt + this.config.size);
  }
  onPagniatorChange(value: PageEvent) {
    //console.log(value);
    this.config.size = value.pageSize;
    this.config.index = value.pageIndex;
    this._getData();
  }
  getAsSafeHtml(str: string): SafeHtml {
    return str as SafeHtml;
  }
  // get icon of table action
  getActionIcon = (action: RowAction) => action.icon;
  getActionClasses(action: RowAction): string {
    let classes = "btn btn-link btn-just-icon ";
    if (action.type == RowActionType.Warning) classes += "btn-warning";
    if (action.type == RowActionType.Danger) classes += "btn-danger";
    if (action.type == RowActionType.Info) classes += "btn-info";
    return classes;
  }

  getColWidth(column: ColumnConfig): string {
    if (column.width) return column.width.toString() + "%";
    return "auto";
  }
  //#endregion
}


