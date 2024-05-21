import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {

  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
