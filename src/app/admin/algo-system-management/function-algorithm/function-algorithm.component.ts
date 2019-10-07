import { Component, OnInit } from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-function-algorithm',
  templateUrl: './function-algorithm.component.html',
  styleUrls: ['./function-algorithm.component.css', '../algo-system-management.component.scss']
})
export class FunctionAlgorithmComponent implements OnInit {

  tableRowMockup = {
    value: 0.01000001,
    growth: 0.08000001,
    growthUnits: -12.34567890,
    result: 0.01000001
  };

  faCheck = faCheck;
  faTimes = faTimes;
  error: boolean;
  success: boolean;

  selectUnits = [
    {
      id: 1,
      value: 'Milliseconds'
    },
    {
      id: 2,
      value: 'Seconds'
    },
    {
      id: 3,
      value: 'Minutes'
    },
    {
      id: 4,
      value: 'Hours'
    },
    {
      id: 5,
      value: 'Days'
    },
    {
      id: 6,
      value: 'Weeks'
    }
  ];

  tableRows = Array(100).fill(this.tableRowMockup);

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.error = true;
  }

}
