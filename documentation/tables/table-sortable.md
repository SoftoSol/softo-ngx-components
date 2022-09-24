# Table Sortable

## Example

### HTML

```` HTML
  <softo-table-sortable 
    title="List Name" 
    [headerRow]="tableColumns" 
    [dataRows]="tableData"
    [rowActions]="rowActions"
    [tableActions]="tableButtons"
  >
  </softo-table-sortable>
````

### TS  

```` TypeScript
  public tableData: any[] = [];
  public rowActions: RowAction[] = [];
  public tableButtons: TableButton[] = [
    {
      label: "Add",
      classes:'btn-primary',
      onClick: () => {
        // some action
      }
    }
  ]
  public tableColumns: ColumnConfig[] = [
    {
      title: 'Email',
      type: ColumnType.Text,
      textAlign: 'left',
      sortable: true,
      value: (item) => {
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
  
  ...
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
````
