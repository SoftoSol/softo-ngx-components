import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SoftoAlertService {

  constructor() { }

  success(message: string, title: string = "Success") {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  error(message: string, title: string = "Error") {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

  warning(message: string, title: string = "Warning") {
    Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  }

  info(message: string, title: string = "Info") {
    Swal.fire({
      title: title,
      text: message,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

  confirm(message: string, title: string = "Are you sure?", confirmButtonText: string = "Yes",
    cancelButtonText: string = "No", icon: 'warning' | 'error' | 'success' | 'info' | 'question' = "question"
    , confirmButtonColor: string = "#3085d6", cancelButtonColor: string = "#d33") {
    return Swal.fire({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: confirmButtonColor,
      cancelButtonColor: cancelButtonColor,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
  }

  loading(message: string, title: string = "Loading...",
    icon: 'warning' | 'error' | 'success' | 'info' | 'question' = "info",
    allowOutsideClick: boolean = false) {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      allowOutsideClick: allowOutsideClick,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  close() {
    Swal.close();
  }

}