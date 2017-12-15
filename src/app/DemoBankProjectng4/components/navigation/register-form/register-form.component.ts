import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from './../../../../lib/modal/modal.component';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterFormComponent implements OnInit {
  applyForm: FormGroup;
  applyData: any = [];

  constructor(private _fb: FormBuilder, private modal: ModalComponent) {}

  ngOnInit() {
    this.applyForm = this._fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      dob: [''],
      city: [''],
      pincode: [''],
      jobType: [''],
      products: ['']
    });
  }
  confirmApply() {
    this.modal.close('data');
  }
}
