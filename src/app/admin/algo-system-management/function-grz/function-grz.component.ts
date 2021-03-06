import { Component, OnInit } from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {AdminService} from '../../admin.service';
import {SnotifyService} from 'ng-snotify';

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
	
	// Input Function 2
	
	cpiPercentage = 5.4;
	cpiAdjustmentFactor = 2.600000000000;
	unfundedLiabilities = 0.000000005;
	ajdustmentFactor = 0.1;
	outputGRZ = 0.01439246;
	btcusdratio = 4.888999;
	
	constructor(
		public adminService: AdminService,
		private snotifyService: SnotifyService
	) { }
	
	ngOnInit() {
	}
	
	submit() {
		this.snotifyService.simple('Successfully saved.');
	}

}
