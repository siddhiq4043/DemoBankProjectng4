import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhoWeAreComponent } from './components/about-us/who-we-are/who-we-are.component';
import { CorporateGoveranceComponent } from './components/about-us/corporate-goverance/corporate-goverance.component';
import { PoliciesComponent } from './components/about-us/policies/policies.component';
import { TabsDemoComponent } from './components/tabs-demo/tabs-demo.component';

const demoBankng4Routes: Routes = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'about-us',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: AboutUsComponent
      },
      {
        path: 'who-we-are',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: WhoWeAreComponent
          }
        ]
      },
      {
        path: 'corporate-goverance',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: CorporateGoveranceComponent
          }
        ]
      },
      {
        path: 'policies',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: PoliciesComponent
          }
        ]
      }
    ]
  },
  {
    path: 'products',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'customer-services',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'locate-us',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(demoBankng4Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoBankng4RoutingModule { }
