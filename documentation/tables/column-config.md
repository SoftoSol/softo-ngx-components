# ColumnConfig

`Interface` used for table header row configurations.

## Fields

|Name   |Required|Type      |Description|Default Value|
|:---   |:---     |:----    |:----      |:---         |
|title  |Yes      |string   |Title of column|-        |
|type   |No       |[ColumnType](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/tables/column-type.md)|column value type, either `Text` or `Html`|`Text`|
|textAlign|No     |'left' &#124; 'right'|column value text alignment|left|
|sortable|No      |boolean  |if table can be sorted by clicking on header|false|
|sortDir|No       |'asc' &#124; 'desc'|sort direction, if `sortable`|`asc`|
|sort?  |No       |(item:any)=>string &#124; number &#124; boolean &#124; Date|sort method|if sort id null, result of will be considered|
|value| Yes       |(item: any)=>string|value of item to show in rows|-|
| cssClass | No | string | to apply css class to table column. Applicable for ColumnType.Text only | '' |

## Example

```` typescript
var colConfig={
    title: 'Email',
    type: ColumnType.Text,
    textAlign: 'left',
    cssClass:'text-bg-success',
    sortable: true,
    sort:(item:any)=>  item.email??"";
    value: (item:any) => (item.email ?? "").toLowerCase();
}
````
