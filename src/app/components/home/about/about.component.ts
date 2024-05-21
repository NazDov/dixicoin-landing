import {AfterViewInit, Component, OnInit} from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import {StateService} from '../../../services/ipservice/state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(
    public analyticsService: AnalyticsService,
    public stateService: StateService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.stateService.setIconState(true);
  }

}
