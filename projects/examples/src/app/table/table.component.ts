import { Component, Inject, OnInit } from '@angular/core';
import { ColumnConfig, ColumnType, RowAction, RowActionType, TableButton, SoftoAlertService, NotifierService } from 'softo-ngx-components';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'examples';
  isloading:boolean=false;
  constructor(
    private alert:SoftoAlertService,
    private notifier: NotifierService
    ) { }

  tableData: any[] = [];
  public rowActions: RowAction[] = [
    {
      icon:`<i class="fa fa-trash"></i>`,
      tooltip: "Delete",
      onClick:async (row:any)=>{
        // some action
        let result=await this.alert.confirm("Are you sure you want to delete this item?");
        if(result.isConfirmed){
          // loading
          this.alert.loading("Deleting...");
          setTimeout(() => {
            this.alert.success("Item deleted successfully");
          }, 2000);
        }
      },
      show:(row:any)=>{
        return row.role=='admin';
      },
      type:RowActionType.Warning
    },
    {
      icon:`<i class="fa fa-trash"></i>`,
      tooltip:'Delete',
      onClick:async (row:any)=>{
        // some action
        this.notifier.warning('It is a warning message');
      },
      show:(row:any)=>{
        return row.role=='admin';
      },
      type:RowActionType.Warning
    }
  ];
  tableButtons: TableButton[] = [
    {
      label: "Add",
      classes:'btn-primary',
      onClick: () => {
        console.log('add');
      }
    },
    {
      label: "Add",
      onClick: () => {
        console.log('add');
      }
    }
  ]
  tableColumns: ColumnConfig[] = [
    {
      title: "Id",
      value: (item: any) => item.id,
      sortable: true,
    },
    {
      title: 'Email',
      type: ColumnType.Text,
      textAlign: 'left',
      sortable: true,
      value: (item:any) => {
        return (item.email ?? "").toLowerCase();
      },
    },
    {
      title: 'Role',
      type: ColumnType.Text,
      textAlign: 'left',
      sortable: true,
      value: (item:any) => {
        return item.role;
      }
    }, {
      title: 'Created On',
      type: ColumnType.Text,
      textAlign: 'left',
      sortable: false,
      value: (item:any) => {
        return (new Date(item.createdAt)).toDateString();
      }

    }
  ];
  public footer:string[]=["footer1","footer2","footer3","footer4"];
  ngOnInit(): void {

 
    this.fetchData();
     }
   
     public async fetchData(): Promise<void> {
      console.log('fetching data');
      this.isloading=true;
           var data:any[]  =[];
           for (let i = 0; i < 100; i++) {
             data.push({
              id:i+1,
               email: "test" + i + "@mail.com",
               role: "admin",
               createdAt: (new Date())
             });
             data.push({
              id:i+101,
              email: "test" + (i+100) + "@mail.com",
              role: "user",
              createdAt: (new Date())
            });
           }
           setTimeout(() => {
             
             this.tableData = data;
             this.isloading=false;
           }, 2000);
         }
}
