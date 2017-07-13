import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  options = {
    series: [{
        data: [29.9, 71.5, 106.4, 129.2],
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}
