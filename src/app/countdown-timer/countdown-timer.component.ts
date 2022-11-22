import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../service/date-util.service';
@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit{
  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
  }

  // @ts-ignore
  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }


}
