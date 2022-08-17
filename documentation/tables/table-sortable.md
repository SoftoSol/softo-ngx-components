# Table Sortable


## Example


### HTML

```` HTML
    <softo-table-sortable [title]="tableTitle" iconType="assignments" 
        [headerRow]="tableColumns" 
        [dataRows]="tableData"
        [actions]="tableActions">
    </softo-table-sortable>
````


### TS 

```` TypeScript
 tableTitle: string = "List";
  tableColumns: ColumnConfig[];
  tableData: [] = [];
  tableActions: TableAction[] = [
     {
       icon: `<i class="material-icons">edit</i>`,
       onClick(item) {
         console.log(item);
       },
       type: TableActionType.Warning
     },
     {
       icon: `<i class="material-icons">close</i>`,
       onClick(item) {
         console.log(item);
       },
       type: TableActionType.Danger
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
          return (item.email ?? "").toLowerCase();
        },
      },
      {
        title: 'Role',
        type: ColumnType.Text,
        textAlign: 'left',
        sortable: true,
        value: (item) => {
          return this.titleCase.transform(item.role);
        }
      }, {
        title: 'Created On',
        type: ColumnType.Text,
        textAlign: 'left',
        sortable: true,
        value: (item) => {
          return (new Date(item.createdAt)).toDateString();
        }

      }
    ];
 this.fetchData();
  }
  fetchData().subscribe(
      (response: any) => {
        const { data } = response;
        if (response.code == 200) {
          this.tableData = data;
        }
        else {
          // todo: show error message
        }
      }
    )
````