import {Component, Input, OnInit} from '@angular/core';
import {Cars} from '../../../models/Cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: Cars[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
