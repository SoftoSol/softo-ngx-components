# RowAction

`Interface` that configures table row action.

## Properties

|Name   |Required|Type      |Description|Default Value|
|:---   |:---     |:----    |:----      |:---         |
|icon|Yes|SafeHtml|Icon HTML is shown inside `<a></a>`|-|
|type|Yes|[RowActionType](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/tables/row-action-type.md)|Determines whether background color of `<a></a>` as red, green or orange|-|
|show|No|(item:any)=>boolean|when a condition is required to show an icon|yes|
|onClick|Yes|(row:any)=>void|callback for click action|-|
|tooltip|No|string|Show label on hovered|-|
