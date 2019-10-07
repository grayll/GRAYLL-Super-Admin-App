import { Component, OnInit } from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-function-four',
  templateUrl: './function-four.component.html',
  styleUrls: ['./function-four.component.css', '../algo-system-management.component.scss']
})
export class FunctionFourComponent implements OnInit {

  tableRowMockup = {
    availableSupply: 100,
    increaseRate: 0.16
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
