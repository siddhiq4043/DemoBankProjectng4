import { Injectable } from '@angular/core';
import { ToasterContainerComponent, ToasterService } from 'angular2-toaster';

@Injectable()
export class AppNotify {
  constructor(private toasterService: ToasterService) {}

  success(message: string) {
    this.toasterService.pop('success', null, message);
  }

  fail(message: string) {
    this.toasterService.pop('error', null, message);
  }

  wait(message: string) {
    this.toasterService.pop('wait', null, message);
  }

  warning(message: string) {
    this.toasterService.pop('warning', null, message);
  }
}
