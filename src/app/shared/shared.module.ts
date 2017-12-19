import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  ToasterModule,
  ToasterService
} from 'angular2-toaster/angular2-toaster';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { LoadingService } from './services/loading.service';
import { LoginRedirectComponent } from './components/login-redirect/login-redirect.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LibraryModule } from '../lib/lib.module';
import { AppNotify } from './services/app-notify.service';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  imports: [
    CarouselModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToasterModule,
    NgxChartsModule,
    LibraryModule
  ],
  declarations: [LoginRedirectComponent, LoaderComponent, RegistrationFormComponent],
  exports: [
    CarouselModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToasterModule,
    LoginRedirectComponent,
    NgxChartsModule,
    LoaderComponent,
    RegistrationFormComponent
  ],
  providers: [ToasterService, LoadingService, AppNotify]
})
export class SharedModule {}
