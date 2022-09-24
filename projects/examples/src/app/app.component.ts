import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColumnConfig, ColumnType, RowAction, TableButton } from 'projects/softo-ngx-components/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examples';

  constructor() { }

  tableTitle: string = "List";
  tableColumns: ColumnConfig[]=[];
  tableData: any[] = [];
  rowActions: RowAction[] = [];
  tableActions: TableButton[] = [
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
  ngOnInit(): void {

    this.tableColumns = [
      {
        title: 'Email',
        type: ColumnType.Text,
        textAlign: 'left',
        sortable: true,
        value: (item) => {
          //console.log(item);
          return (item.email ?? "").toLowerCase();
        },
      },
      {
        title: 'Role',
        type: ColumnType.Text,
        textAlign: 'left',
        sortable: true,
        value: (item) => {
          return item.role;
        }
      }, {
        title: 'Created On',
        type: ColumnType.Text,
        textAlign: 'left',
        sortable: false,
        value: (item) => {
          return (new Date(item.createdAt)).toDateString();
        }

      }
    ];
 this.fetchData();
  }

  private async fetchData(): Promise<void> {
   
        var data:any[]  = [
          {
          email: "test@mail.com",
          role: "admin",
          createdAt: new Date()
        }, {
          email: "test2@mail.com",
          role: "user",
          createdAt: new Date()
        }];
        for (let i = 0; i < 100; i++) {
          data.push({
            email: "test" + i + "@mail.com",
            role: "admin",
            createdAt: (new Date())
          });
        }
        setTimeout(() => {
          
          this.tableData = data;
        }, 2000);
      }
}
