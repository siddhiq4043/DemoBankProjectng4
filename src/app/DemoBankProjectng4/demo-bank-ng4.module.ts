import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from '../lib/lib.module';
import { LoadingService } from '../shared/services/loading.service';
import { DemoBankng4RoutingModule } from './demo-bank-ng4-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TabsDemoComponent } from './components/tabs-demo/tabs-demo.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhoWeAreComponent } from './components/about-us/who-we-are/who-we-are.component';
import { CorporateGoveranceComponent } from './components/about-us/corporate-goverance/corporate-goverance.component';
import { PoliciesComponent } from './components/about-us/policies/policies.component';

@NgModule({
  imports: [CommonModule, SharedModule, LibraryModule, DemoBankng4RoutingModule],
  declarations: [
    NavigationComponent,
    DashboardComponent,
    TabsDemoComponent,
    AboutUsComponent,
    WhoWeAreComponent,
    CorporateGoveranceComponent,
    PoliciesComponent
  ],
  entryComponents: [],
  providers: [LoadingService]
})
export class DemoBankng4Module {}
