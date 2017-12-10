import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { LoadingService } from '../../../shared/services/loading.service';
import { CarouselMetadata } from './../../model/carousel-metadata.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ]
})
export class DashboardComponent implements OnInit {
  carouselMetadata: any;
  constructor(private loadingService: LoadingService, private router: Router) {}

  ngOnInit() {
    this.loadingService.toggleLoadingIndicator(false);
    this.carouselMetadata = CarouselMetadata;
  }

  demoHere() {
  }
}
