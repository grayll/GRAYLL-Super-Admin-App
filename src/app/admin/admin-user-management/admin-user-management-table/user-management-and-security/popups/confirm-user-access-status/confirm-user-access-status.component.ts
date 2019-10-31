import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../../../shared/popup/popup.service';
import {ActivatedRoute} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {AdminService} from '../../../../../admin.service';

@Component({
  selector: 'app-confirm-user-access-status',
  templateUrl: './confirm-user-access-status.component.html',
  styleUrls: ['./confirm-user-access-status.component.scss']
})
export class ConfirmUserAccessStatusComponent implements OnInit {
	
	@ViewChild('content') modal;
	password: string;
	errorMessage: string;
	activity: string;
	activated: boolean;
	newActivated: boolean;
	didLoadContent: boolean;
	
	constructor(
	public popupService: PopupService,
	private route: ActivatedRoute,
	private snotifyService: SnotifyService,
	public adminService: AdminService
	) {
		this.loadAssetFromRoute();
	}
	
	private loadAssetFromRoute() {
		this.activity = this.route.snapshot.params.value;
		this.populateStatus();
	}
	
	private populateStatus() {
		switch (this.activity) {
			case 'GRY | 1':
				this.activated = this.adminService.isGRY1UserAccessActive;
				this.newActivated = this.adminService.isNewGRY1UserAccessActive;
				break;
			case 'GRY | 2':
				this.activated = this.adminService.isGRY2UserAccessActive;
				this.newActivated = this.adminService.isNewGRY2UserAccessActive;
				break;
			case 'GRY | 3':
				this.activated = this.adminService.isGRY3UserAccessActive;
				this.newActivated = this.adminService.isNewGRY3UserAccessActive;
				break;
			default:
				this.activated = this.adminService.isGRZUserAccessActive;
				this.newActivated = this.adminService.isNewGRZUserAccessActive;
				break;
		}
		setTimeout(() => {
			this.didLoadContent = true;
		}, 100);
	}
	
	ngOnInit() {
		this.popupService.open(this.modal);
	}
	
	save() {
		this.errorMessage = null;
		if (this.clientValidation()) {
			this.popupService.close().then(() => {
				switch (this.activity) {
					case 'GRY | 1':
						this.adminService.isGRY1UserAccessActive = this.activated;
						this.adminService.isNewGRY1UserAccessActive = this.newActivated;
						break;
					case 'GRY | 2':
						this.adminService.isGRY2UserAccessActive = this.activated;
						this.adminService.isNewGRY2UserAccessActive = this.newActivated;
						break;
					case 'GRY | 3':
						this.adminService.isGRY3UserAccessActive = this.activated;
						this.adminService.isNewGRY3UserAccessActive = this.newActivated;
						break;
					default:
						this.adminService.isGRZUserAccessActive = this.activated;
						this.adminService.isNewGRZUserAccessActive = this.newActivated;
						break;
				}
				this.snotifyService.simple('Status has been changed.');
			});
		}
	}
	
	clientValidation(): boolean {
		if (!this.password || this.password === '') {
			this.errorMessage = 'Please enter your password.';
			return false;
		}
		return true;
	}

}
