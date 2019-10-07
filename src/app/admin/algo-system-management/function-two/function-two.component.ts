import { Component, OnInit } from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-function-two',
  templateUrl: './function-two.component.html',
  styleUrls: ['./function-two.component.css', '../algo-system-management.component.scss']
})
export class FunctionTwoComponent implements OnInit {

  tableRowMockup = {
    priceChange: 15,
    supply: 0.759
  };

  faCheck = faCheck;
  faTimes = faTimes;
  error: boolean;
  success: boolean;

  tableRows = Array(100).fill(this.tableRowMockup);

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.success = true;
  }

}
