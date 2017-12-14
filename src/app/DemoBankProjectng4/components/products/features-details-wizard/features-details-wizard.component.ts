import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AllLoansMetadata } from './../../../model/all-loans-metadata.model';

@Component({
  selector: 'app-features-details-wizard',
  templateUrl: './features-details-wizard.component.html',
  styleUrls: ['./features-details-wizard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturesDetailsWizardComponent implements OnInit {
  allLoansMetadata: any;
  constructor() {}

  ngOnInit() {
    this.allLoansMetadata = AllLoansMetadata;
  }
}
