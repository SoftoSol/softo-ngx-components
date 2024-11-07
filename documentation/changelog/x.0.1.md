# Change log x.0.1

## softo-table-sortable

1. `display` is added to `ColumnConfig` to apply custom display text. It must return string to make it display friendly. If display method is not provided then the result of `value` will be converted to string.
2. `sort` method of `ColumnConfig` functionality is fixed.
