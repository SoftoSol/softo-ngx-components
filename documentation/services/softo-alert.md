# SoftoAlertService

SoftoAlertService is used for showing dialog alerts.

## Dependency

SoftoAlertService is dependent on sweetalert2@11.0.0

`npm i sweetalert2@11.0.0`

## Methods

### Success

`message` is required while `title` is optional

    success(message: string, title: string = "Success")

### Error

`message` is required while `title` is optional

     error(message: string, title: string = "Error") 

### Warning

`message` is required while `title` is optional

    warning(message: string, title: string = "Warning")

### Info

`message` is required while `title` is optional

      info(message: string, title: string = "Info")

### Confirm

`message` is required while others are optional

    confirm(message: string, title: string = "Are you sure?", confirmButtonText: string = "Yes",
        cancelButtonText: string = "No", icon: 'warning' | 'error' | 'success' | 'info' | 'question' = "question"
        , confirmButtonColor: string = "#3085d6", cancelButtonColor: string = "#d33")

### Loading

`message` is required while others are optional

    loading(message: string, title: string = "Loading...",
        icon: 'warning' | 'error' | 'success' | 'info' | 'question' = "info",
        allowOutsideClick: boolean = false)

### Close

To close any dialog programmatically

    close() 
