import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  title;

  constructor() {
  }

  ngOnInit() {
  this.title = 'cars works';
  }
}
