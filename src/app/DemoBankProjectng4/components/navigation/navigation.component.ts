import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuMetadata } from './../../model/menu-metadata.model';
import { ModalComponent } from './../../../lib/modal/modal.component';
import { LoginComponent } from './../navigation/login/login.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  menuMetadata: any;
  @ViewChild('loginModal') loginModal: ModalComponent;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.menuMetadata = MenuMetadata;
  }

  login() {
    this.loginModal.modalTitle = 'Login';
    this.loginModal.modalFooter = false;
    this.loginModal.open(LoginComponent);
    //this.loginModal.open();
  }

  refreshLogin(data) {
    console.log(data);
  }
}
