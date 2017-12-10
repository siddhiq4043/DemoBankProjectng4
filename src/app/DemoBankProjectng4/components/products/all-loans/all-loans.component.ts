import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AllLoansMetadata } from './../../../model/all-loans-metadata.model';

@Component({
  selector: 'app-all-loans',
  templateUrl: './all-loans.component.html',
  styleUrls: ['./all-loans.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllLoansComponent implements OnInit {
  allLoansMetadata: any;
  constructor() {}

  ngOnInit() {
    this.allLoansMetadata = AllLoansMetadata;
  }
}
