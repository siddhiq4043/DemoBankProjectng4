import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './../../../../lib/modal/modal.component';
import { RegisterFormComponent } from './../../navigation/register-form/register-form.component';

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.scss']
})
export class PersonalLoanComponent implements OnInit {

  @ViewChild('applyModal') applyModal: ModalComponent;
  constructor() { }

  ngOnInit() {
  }

  apply() {
    this.applyModal.modalTitle = 'Quick Loan Application Form';
    this.applyModal.modalFooter = false;
    this.applyModal.open(RegisterFormComponent);
    //this.loginModal.open();
  }
  refreshApply(data) {
    console.log(data);
  }
}
