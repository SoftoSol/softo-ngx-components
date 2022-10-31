import { Injectable } from '@angular/core';
import { NotifierService as AngularNotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private notifier:AngularNotifierService) { }

  public error(message:string, notificationId?:string){
    this.notifier.notify('error',message, notificationId);
  }

  public success(message:string, notificationId?:string){
    this.notifier.notify('success',message, notificationId);
  }

  public info(message:string, notificationId?:string){
    this.notifier.notify('info',message, notificationId);
  }

  public warning(message:string, notificationId?:string){
    this.notifier.notify('warning',message, notificationId);
  }
}
