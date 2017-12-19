import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from './../../../../lib/modal/modal.component';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AppNotify } from './../../../../shared/services/app-notify.service';
import { Register } from './../../../../shared/model/register.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterFormComponent implements OnInit {
  loanTypeList: any = [];
  employmentTypeList: any = [];
  applyForm: FormGroup;
  applyData: Register = new Register();

  constructor(private _fb: FormBuilder, private modal: ModalComponent,
    private appNotify: AppNotify) {}

  ngOnInit() {
    this.loanTypeList = LoanTypeDropdown;
    this.employmentTypeList = EmploymentTypeDropdown;
    this.applyForm = this._fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      annualIncome: [''],
      birthDate: [''],
      loanType: [''],
      employeetype: [''],
      loanrequired: [''],
      contactTime: [''],
      agree: ['', Validators.required]
    });
  }
  confirmApply() {
    this.modal.close();
    console.log(this.applyData);
    this.appNotify.success('Register successfully.');
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
