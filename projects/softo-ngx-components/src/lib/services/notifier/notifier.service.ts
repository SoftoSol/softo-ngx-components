import { Injectable } from '@angular/core';
import { NotifierService as AngularNotifierService } from 'angular-notifier-3';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private notifier: AngularNotifierService) {}

  public error(message: string, notificationId?: string) {
    this.notifier.notify('error', message, notificationId);
  }

  public success(message: string, notificationId?: string) {
    this.notifier.notify('success', message, notificationId);
  }

  public clickable(message: string, link?: string, notificationId?: string) {
    const formattedMessage = link
      ? `${message} <a href="${link}" target="_blank">Visit Link</a> | <button class="copy-link-btn" onclick="navigator.clipboard.writeText('${link}')">Copy Link</button>`
      : message;
    this.notifier.notify('success', formattedMessage, notificationId);
  }

  public info(message: string, notificationId?: string) {
    this.notifier.notify('info', message, notificationId);
  }

  public warning(message: string, notificationId?: string) {
    this.notifier.notify('warning', message, notificationId);
  }
}
