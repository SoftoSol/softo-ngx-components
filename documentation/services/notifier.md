# NotifierService

To show notification on screen, `NotifierService` is helping you.

## Getting Started

`NotifierService` has dependency on `angular-notifier@11.0.0`

`npm i angular-noitifier@11.0.0`

After installing above dependency, you have to add `<softo-notification-tray></softo-notification-tray>` to your component where you want to show notification. Usually in layout component of a module.

To include styles from `angular-notifier` you have added following line to your styles.(css|scss)

    @import '../node_modules/angular-notifier/styles.css';

You can add css|scss depends on your application.

## Methods

`notificationId` is optional in all methods while message is required.

### Error

    error(message:string, notificationId?:string)

### Success

    success(message:string, notificationId?:string)

### Info

    info(message:string, notificationId?:string)

### Warning

    warning(message:string, notificationId?:string)
