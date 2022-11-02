# TableButton

`Interface` used to configure table buttons

|Name   |Required|Type      |Description|Default Value|
|:---   |:---     |:----    |:----      |:---         |
|label|Yes|string|Button label|-|
|classes|No|string|css classes for button|-|
|onClick|Yes|()=>void|callback for click action|-|

## Example

```` typescript
var tableBtn={
      label: "Add",
      classes:'btn-primary',
      onClick: () => {
        // some action
      }
    }
````
