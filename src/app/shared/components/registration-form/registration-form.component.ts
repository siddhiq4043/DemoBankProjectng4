import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './../../../lib/modal/modal.component';
import { RegisterFormComponent } from './../../../DemoBankProjectng4/components/navigation/register-form/register-form.component';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

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
