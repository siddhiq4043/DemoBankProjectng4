import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from './../../../../lib/modal/modal.component';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { LoginModel } from '../../../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: LoginModel = new LoginModel();

  constructor(private _fb: FormBuilder, private modal: ModalComponent) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  confirmLogin() {
    this.modal.close('data');
  }
}
