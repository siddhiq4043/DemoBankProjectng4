import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-loan-create-application',
  templateUrl: './personal-loan-create-application.component.html',
  styleUrls: ['./personal-loan-create-application.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalLoanCreateApplicationComponent implements OnInit {
  private sub: any;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  loanTypeList: any = [];
  employmentTypeList: any = [];
  loanTypeData: any;
  empTypeData: any;
  constructor(
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.staticTabs.tabs[1].disabled = true;
    this.staticTabs.tabs[2].disabled = true;
    this.loanTypeList = LoanTypeDropdown;
    this.employmentTypeList = EmploymentTypeDropdown;
    this.sub = this.route.queryParams.subscribe(
      queryParams => {
        this.loanTypeData = queryParams['loanType'];
        this.empTypeData = queryParams['empType'];
      });
  }
  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].disabled = false;
    this.staticTabs.tabs[tab_id].active = true;
  }
}

export const LoanTypeDropdown = [
  {
      'id': '1',
      'loanType': 'Personal Loan',
  },
  {
      'id': '2',
      'loanType': 'Business Loan',
  },
  {
      'id': '3',
      'loanType': 'House Loan',
  },
  {
      'id': '4',
      'loanType': 'Loan Against Property',
  },
  {
      'id': '5',
      'loanType': 'Balance Transfer TopUp Loan',
  }
];
export const EmploymentTypeDropdown = [
  {
      'id': '1',
      'empType': 'Salaried',
  },
  {
      'id': '2',
      'empType': 'Self Employed Business',
  },
  {
      'id': '3',
      'empType': 'Self Employed Professionals',
  },
  {
      'id': '4',
      'empType': 'NRI',
  }
];
