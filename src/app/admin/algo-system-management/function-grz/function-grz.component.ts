import { Component, OnInit } from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-function-grz',
  templateUrl: './function-grz.component.html',
  styleUrls: ['./function-grz.component.css', '../algo-system-management.component.scss']
})
export class FunctionGrzComponent implements OnInit {
	
	tableRowMockup = {
		value: 0.01000001,
		growth: 0.08000001,
		growthUnits: -12.34567890,
		result: 0.01000001,
		units: 0.01000001
	};
	
	faCheck = faCheck;
	faTimes = faTimes;
	error: boolean;
	success: boolean;
	
	selectLog = [
		{
			id: 0,
			value: 'log(e)'
		},
		{
			id: 1,
			value: 'log(10)'
		}
	];
	
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
	
	selectedlog: {id: number, value: string} = this.selectLog[0];
	selectedUnit: {id: number, value: string} = this.selectUnits[2];
	tableRows = Array(100).fill(this.tableRowMockup);
	
	constructor(
	public adminService: AdminService
	) { }
	
	ngOnInit() {
	}
	
	submit(functionNumber: number) {
		this.adminService.setDidRunAllFunctionsTo(false);
		switch (functionNumber) {
			case 1:
				break;
			case 2:
				this.adminService.didRunFunction2 = true;
				break;
			case 3:
				this.adminService.didRunFunction3 = true;
				break;
			default:
				this.adminService.didRunFunction4 = true;
				break;
		}
	}

}
