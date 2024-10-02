import { NgModule } from '@angular/core';

import { TableSortableComponent } from './tables/table-sortable/table-sortable.component';
import { CommonModule } from '@angular/common';
import { NotifierService, SoftoAlertService } from './services';
import { MatModules } from './material';
import { NotificationTrayComponent } from './components/notification/notification-tray/notification-tray.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { NotifierModule } from 'angular-notifier-3';
import { notifierDefaultOptions } from './notifier.config';
import { FilterPipe } from './services/filter/search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableSortableComponent,
    NotificationTrayComponent,
    ButtonComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ...MatModules,
    NotifierModule.withConfig(notifierDefaultOptions),
    FormsModule
  ],
  providers: [SoftoAlertService, NotifierService],
  exports: [
    TableSortableComponent,
    NotificationTrayComponent,
    ButtonComponent
  ]
})
export class SoftoNgxComponentsModule { }
