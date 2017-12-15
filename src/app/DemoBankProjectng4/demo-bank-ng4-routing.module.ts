import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { AllLoansComponent } from './components/products/all-loans/all-loans.component';
import { LoanAgainstPropertyComponent } from './components/products/loan-against-property/loan-against-property.component';
import { PersonalLoanComponent } from './components/products/personal-loan/personal-loan.component';
import { HouseLoanComponent } from './components/products/house-loan/house-loan.component';
import { BusinessLoanComponent } from './components/products/business-loan/business-loan.component';
import { BalanceTransferTopUpLoanComponent } from './components/products/balance-transfer-top-up-loan/balance-transfer-top-up-loan.component';
import { PersonalLoanCreateApplicationComponent } from './components/products/personal-loan/personal-loan-create-application/personal-loan-create-application.component';
import { PersonalLoanUpdateApplicationComponent } from './components/products/personal-loan/personal-loan-update-application/personal-loan-update-application.component';

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
      }
    ]
  },
  {
    path: 'products',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'all-loans',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: AllLoansComponent
          }
        ]
      },
      {
        path: 'loan-against-property',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: LoanAgainstPropertyComponent
          }
        ]
      },
      {
        path: 'personal-loans',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: PersonalLoanComponent
          },
          {
            path: 'personal-loan-create-application',
            component: PersonalLoanCreateApplicationComponent
          },
          {
            path: 'personal-loan-update-application',
            component: PersonalLoanUpdateApplicationComponent
          }
        ]
      },
      {
        path: 'business-loans',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: HouseLoanComponent
          }
        ]
      },
      {
        path: 'balance-transfer-top-up-loans',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: BalanceTransferTopUpLoanComponent
          }
        ]
      },
      {
        path: 'house-loans',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: HouseLoanComponent
          }
        ]
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
