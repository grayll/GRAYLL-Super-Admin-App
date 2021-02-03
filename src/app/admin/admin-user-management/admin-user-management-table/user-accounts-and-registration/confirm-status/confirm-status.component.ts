import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../../shared/popup/popup.service';
import {ActivatedRoute} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {AdminService} from '../../../../admin.service';

@Component({
  selector: 'app-confirm-status',
  templateUrl: './confirm-status.component.html',
  styleUrls: ['./confirm-status.component.scss']
})
export class ConfirmStatusComponent implements OnInit {
	
	@ViewChild('content') modal;
	password: string;
	errorMessage: string;
	activity: string;
	activated: boolean;
	newActivated: boolean;
	didLoadContent: boolean;
	userAccountId: string;
	
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
		this.userAccountId = this.route.snapshot.params.grayllId;
		this.populateStatus();
	}
	
	private populateStatus() {
		switch (this.activity) {
			case 'Sign Up':
				this.activated = !this.adminService.isUserSignUpPaused;
				this.newActivated = !this.adminService.isNewUserSignUpPaused;
				break;
			case 'App Sign In':
				this.activated = !this.adminService.isUserSignInPaused;
				this.newActivated = !this.adminService.isNewUserSignInPaused;
				break;
			default:
				this.activated = !this.adminService.isUserKYCPaused;
				this.newActivated = !this.adminService.isNewUserKYCPaused;
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
					case 'Sign Up':
						this.adminService.isUserSignUpPaused = !this.activated;
						this.adminService.isNewUserSignUpPaused = this.newActivated;
						break;
					case 'App Sign In':
						this.adminService.isUserSignInPaused = !this.activated;
						this.adminService.isNewUserSignInPaused = this.newActivated;
						break;
					default:
						this.adminService.isUserKYCPaused = !this.activated;
						this.adminService.isNewUserKYCPaused = this.newActivated;
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
