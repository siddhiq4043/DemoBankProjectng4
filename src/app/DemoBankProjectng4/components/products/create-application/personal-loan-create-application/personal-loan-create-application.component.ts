import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { AppNotify } from './../../../../../shared/services/app-notify.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

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
  identityTypeList: any = [];
  loanTypeData: any;
  empTypeData: any;
  isPermanentAddress: boolean;
  createApplicationData: any = {};
  basicInfoForm: FormGroup;
  contactDetailsForm: FormGroup;
  employeeDetailsForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private router: Router,
    private appNotify: AppNotify
  ) {}

  ngOnInit() {
    this.isPermanentAddress = false;
    this.staticTabs.tabs[1].disabled = true;
    this.staticTabs.tabs[2].disabled = true;
    this.loanTypeList = LoanTypeDropdown;
    this.employmentTypeList = EmploymentTypeDropdown;
    this.identityTypeList = IdentityTypeDropdown;
    this.createApplicationData['identity'] = this.identityTypeList[0].id;
    this.sub = this.route.queryParams.subscribe(queryParams => {
      this.loanTypeData = queryParams['loanType'];
      this.empTypeData = queryParams['empType'];
    });
    this.basicInfoForm = this._fb.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.contactDetailsForm = this._fb.group({
      email: [''],
      identity: ['', Validators.required],
      identityDetails: ['', Validators.required],
      currentAddress: ['', Validators.required],
      permanentAddress: ['']
    });
    this.employeeDetailsForm = this._fb.group({
      companyName: ['', Validators.required],
      totalAnnualIncome: ['', Validators.required],
      netSalary: [''],
      experience: [''],
      form16: [''],
      previousLoan: ['', Validators.required],
      previousTypeLoan: [''],
      previousLoanAmount: [''],
      previousemi: ['']
    });
  }
  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].disabled = false;
    this.staticTabs.tabs[tab_id].active = true;
  }

  generateApplicationData(data) {
    this.createApplicationData['loanType'] = this.loanTypeData;
    this.createApplicationData['empType'] = this.empTypeData;

    console.log(data);
    this.appNotify.success('Data saved successfully.');
  }

  selectPreviousLoan() {
    if (this.createApplicationData['previousLoan'] === 'No') {
      this.createApplicationData['previousTypeLoan'] = undefined;
      this.createApplicationData['previousLoanAmount'] = undefined;
      this.createApplicationData['previousemi'] = undefined;
    }
  }
}

export const LoanTypeDropdown = [
  {
    id: '1',
    loanType: 'Personal Loan'
  },
  {
    id: '2',
    loanType: 'Business Loan'
  },
  {
    id: '3',
    loanType: 'House Loan'
  },
  {
    id: '4',
    loanType: 'Loan Against Property'
  },
  {
    id: '5',
    loanType: 'Balance Transfer TopUp Loan'
  }
];
export const EmploymentTypeDropdown = [
  {
    id: '1',
    empType: 'Salaried'
  },
  {
    id: '2',
    empType: 'Self Employed Business'
  },
  {
    id: '3',
    empType: 'Self Employed Professionals'
  },
  {
    id: '4',
    empType: 'NRI'
  }
];

export const IdentityTypeDropdown = [
  {
    id: '1',
    card: 'PAN Card Number'
  },
  {
    id: '2',
    card: 'Aadhaar Card Number'
  },
  {
    id: '3',
    card: 'Voter Id Card Number'
  },
  {
    id: '4',
    card: 'Passport Number'
  }
];
