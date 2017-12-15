import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-personal-loan-create-application',
  templateUrl: './personal-loan-create-application.component.html',
  styleUrls: ['./personal-loan-create-application.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalLoanCreateApplicationComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  constructor() { }

  ngOnInit() {
    this.staticTabs.tabs[1].disabled = true;
  }
  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].disabled = false;
    this.staticTabs.tabs[tab_id].active = true;
  }
}
