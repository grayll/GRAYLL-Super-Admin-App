import { Component, OnInit } from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-function-three',
  templateUrl: './function-three.component.html',
  styleUrls: ['./function-three.component.css', '../algo-system-management.component.scss']
})
export class FunctionThreeComponent implements OnInit {

  tableRowMockup = {
    reserveSupply: 75,
    increaseRate: 2.36
  };

  tableRows = Array(100).fill(this.tableRowMockup);

  faCheck = faCheck;
  faTimes = faTimes;
  error: boolean;
  success: boolean;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.error = true;
  }
}
