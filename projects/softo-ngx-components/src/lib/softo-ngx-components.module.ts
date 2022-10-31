import { NgModule } from '@angular/core';

import { TableSortableComponent } from './tables/table-sortable/table-sortable.component';
import { CommonModule } from '@angular/common';
import {  NotifierService, SoftoAlertService } from './services';
import { MatModules } from './material';
import { NotificationTrayComponent } from './components/notification/notification-tray/notification-tray.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import {NotifierModule } from 'angular-notifier';
import { notifierDefaultOptions } from './notifier.config';



@NgModule({
  declarations: [
    TableSortableComponent,
    NotificationTrayComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    ...MatModules,
    NotifierModule.withConfig(notifierDefaultOptions)
  ],
  providers:[SoftoAlertService, NotifierService],
  exports: [
    TableSortableComponent,
    NotificationTrayComponent,
    ButtonComponent
  ]
})
export class SoftoNgxComponentsModule { }
