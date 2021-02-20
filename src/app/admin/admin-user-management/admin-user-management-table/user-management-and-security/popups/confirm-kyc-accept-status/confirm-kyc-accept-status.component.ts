import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../../../../../../shared/popup/popup.service';
import { ActivatedRoute } from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {AdminService} from '../../../../../admin.service';

@Component({
  selector: 'app-confirm-kyc-accept-status',
  templateUrl: './confirm-kyc-accept-status.component.html',
  styleUrls: ['./confirm-kyc-accept-status.component.css']
})
export class ConfirmKycAcceptStatusComponent implements OnInit {

  @ViewChild('content') modal;
  password:string;
  errorMessage: string;
  doc: string;
  activated : boolean;
  newActivated: boolean;
  didLoadContent:boolean;

  constructor(
    public popupService: PopupService,
    private route: ActivatedRoute,
		private snotifyService: SnotifyService,
		public adminService: AdminService
  ) {
    this.loadAssetFromRoute();
   }

   ngOnInit() {
		this.popupService.open(this.modal);
	}
  
 	private loadAssetFromRoute() {
		this.doc = this.route.snapshot.params.value;
		this.populateStatus();
  }
  
  private populateStatus() {
		switch (this.doc) {
			case 'Passport':
				this.activated = this.adminService.government1Activated;
				this.newActivated = this.adminService.government1NewActivated;
				break;
			case 'National ID Card':
        this.activated = this.adminService.government2Activated;
        this.newActivated = this.adminService.government2NewActivated;
				break;
			case 'Drivers License':
        this.activated = this.adminService.government3Activated;
        this.newActivated = this.adminService.government3NewActivated;
        break;
      //Proof of Income
      case 'Income1':
        this.activated = this.adminService.income1Activated;
        break;
      case 'Income2':
        this.activated = this.adminService.income2Activated;
        break;
      case 'Income3':
        this.activated = this.adminService.income3Activated;
        break;
      //Proof of Address
      case 'Address1':
        this.activated = this.adminService.address1Activated;
        break;
      case 'Address2':
        this.activated = this.adminService.address2Activated;
        break;
      case 'Address3':
        this.activated = this.adminService.address3Activated;
        break;
      case 'Address4':
        this.activated = this.adminService.address4Activated;
        break;
      case 'Address5':
        this.activated = this.adminService.address5Activated;
        break;
      //Company Registration
      case 'Registration':
        this.activated = this.adminService.registrationActivated;
        break;
      //Proof of Personal Liquid Assets
      case 'LiquidAssets1':
        this.activated = this.adminService.liquidAssets1Activated;
        break;
      case 'LiquidAssets2':
        this.activated = this.adminService.liquidAssets2Activated;
        break;
      case 'LiquidAssets3':
        this.activated = this.adminService.liquidAssets3Activated;
        break;
      //Company Financials.
      case 'Financials1':
        this.activated = this.adminService.financials1Activated;
        break;
      case 'Financials2':
        this.activated = this.adminService.financials2Activated;
        break;
      case 'Financials3':
        this.activated = this.adminService.financials3Activated;
        break;
      case 'Financials4':
        this.activated = this.adminService.financials4Activated;
        break;
      case 'Financials5':
        this.activated = this.adminService.financials5Activated;
        break;
		}
		setTimeout(() => {
			this.didLoadContent = true;
		}, 100);
  }

  save() {
    console.log("acti", this.activated)
		this.errorMessage = null;
		if (this.clientValidation()) {
			this.popupService.close().then(() => {
				switch (this.doc) {
					case 'Passport':
						this.adminService.government1Activated = this.activated;
						this.adminService.government1NewActivated = this.newActivated;
						break;
					case 'National ID Card':
            this.adminService.government2Activated = this.activated;
            this.adminService.government2NewActivated = this.newActivated;
						break;
					case 'Drivers License':
            this.adminService.government3Activated = this.activated;
            this.adminService.government3NewActivated = this.newActivated;
            break;
          //Proof of Income
          case 'Income1':
            this.adminService.income1Activated = this.activated;
            break;
          case 'Income2':
            this.adminService.income2Activated = this.activated;
            break;
          case 'Income3':
            this.adminService.income3Activated = this.activated;
            break;
          //Proof of Address
          case 'Address1':
            this.adminService.address1Activated = this.activated;
            break;
          case 'Address2':
            this.adminService.address2Activated = this.activated;
            break;
          case 'Address3':
            this.adminService.address3Activated = this.activated;
            break;
          case 'Address4':
            this.adminService.address4Activated = this.activated;
            break;
          case 'Address5':
            this.adminService.address5Activated = this.activated;
            break;
          //Company Registration
          case 'Registration':
            this.adminService.registrationActivated = this.activated;
            break;
          //Proof of Personal Liquid Assets
          case 'LiquidAssets1':
            this.adminService.liquidAssets1Activated = this.activated;
            break;
          case 'LiquidAssets2':
            this.adminService.liquidAssets2Activated = this.activated;
            break;
          case 'LiquidAssets3':
            this.adminService.liquidAssets3Activated = this.activated;
            break;
          //Company financials
          case 'Financials1':
            this.adminService.financials1Activated = this.activated;
            break;
          case 'Financials2':
            this.adminService.financials2Activated = this.activated;
            break;
          case 'Financials3':
            this.adminService.financials3Activated = this.activated;
            break;
          case 'Financials4':
            this.adminService.financials4Activated = this.activated;
            break;
          case 'Financials5':
            this.adminService.financials5Activated = this.activated;
            break;
				}
				this.snotifyService.simple('Document has been accepted.');
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
