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

	cpi: number = 0;
	cpiAdjustmentFactor: number = 0;
	adjustmentFactor: number = 0;
	unfundedLiabilities: number = 0;
	realCpi: number = 0;
	cpiMinute: number = 0;
	realCpiMinute: number = 0;
	outputGRZ: number = 0;
	
	constructor(
		public adminService: AdminService,
		private snotifyService: SnotifyService
	) { }
	
	ngOnInit() {
	}

	calculateCpi() {
		this.realCpi = this.cpi * this.cpiAdjustmentFactor;
		this.cpiMinute = this.cpi / 525.600;
		this.realCpiMinute = this.realCpi / 525.600;
	}
	
	submit() {
		this.snotifyService.simple('Successfully saved.');
	}

}
