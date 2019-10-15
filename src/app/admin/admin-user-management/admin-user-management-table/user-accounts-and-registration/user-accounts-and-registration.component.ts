import {Component, OnInit, SimpleChanges} from '@angular/core';
import {
	faArrowAltCircleDown,
	faCaretDown,
	faCaretUp,
	faCopy,
	faInfoCircle,
	faSearch,
	faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import {ClipboardService} from 'ngx-clipboard';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-user-accounts-and-registration',
  templateUrl: './user-accounts-and-registration.component.html',
  styleUrls: ['./user-accounts-and-registration.component.scss']
})
export class UserAccountsAndRegistrationComponent implements OnInit {
	
	selectedTab: {id: string, name: string, small: string};
	isSortedUpBySignUpDate: boolean;
	isSortedUpByAccountValue: boolean;
	isSortedUpByPositionsValue: boolean;
	isSortedUpByCommissions: boolean;
	userAccountTabs = [
		{
			id: 'completedAccounts',
			name: 'Completed Accounts',
			small: 'XLM Loan Accepted'
		},
		{
			id: 'incompleteAccounts',
			name: 'Incomplete Accounts',
			small: 'XLM Loan Not Accepted'
		},
		{
			id: 'verifiedRegistrations',
			name: 'Verified Registrations',
			small: 'Email Verified'
		},
		{
			id: 'unVerifiedRegistrations',
			name: 'Unverified Registrations',
			small: 'Email Unverified'
		}
	];
	
	// Font Awesome Icons
	faDownload = faArrowAltCircleDown;
	faClose = faTimesCircle;
	faInfo = faInfoCircle;
	faCopy = faCopy;
	faSearch = faSearch;
	faSortBySignUpDate = faCaretDown;
	faSortByAccountValue = faCaretDown;
	faSortByPositionsValue = faCaretDown;
	faSortByCommissions = faCaretDown;
	
	constructor(
	private clipboardService: ClipboardService,
	private snotifyService: SnotifyService
	) {
		this.setActiveTab();
	}
	
	ngOnInit() {}
	
	ngOnChanges(changes: SimpleChanges): void {
		if (changes.activeTabId && changes.activeTabId.currentValue) {
			this.selectedTab = this.userAccountTabs.find((t) => t.id === changes.activeTabId.currentValue);
		}
	}
	
	private setActiveTab() {
		this.selectedTab = this.userAccountTabs[0];
	}
	
	sortBySignUpDate() {
		if (this.isSortedUpBySignUpDate) {
			this.faSortBySignUpDate = faCaretDown;
			this.isSortedUpBySignUpDate = false;
		} else {
			this.faSortBySignUpDate = faCaretUp;
			this.isSortedUpBySignUpDate = true;
		}
	}
	
	sortByAccountValue() {
		if (this.isSortedUpByAccountValue) {
			this.faSortByAccountValue = faCaretDown;
			this.isSortedUpByAccountValue = false;
		} else {
			this.faSortByAccountValue = faCaretUp;
			this.isSortedUpByAccountValue = true;
		}
	}
	
	sortByPositionValue() {
		if (this.isSortedUpByPositionsValue) {
			this.faSortByPositionsValue = faCaretDown;
			this.isSortedUpByPositionsValue = false;
		} else {
			this.faSortByPositionsValue = faCaretUp;
			this.isSortedUpByPositionsValue = true;
		}
	}
	
	sortByCommissions() {
		if (this.isSortedUpByCommissions) {
			this.faSortByCommissions = faCaretDown;
			this.isSortedUpByCommissions = false;
		} else {
			this.faSortByCommissions = faCaretUp;
			this.isSortedUpByCommissions = true;
		}
	}
	
	onTabChange(id: string) {
		this.selectedTab = this.userAccountTabs.find((t) => t.id === id);
	}
	
	copySuccess(account: string) {
		if (this.clipboardService.copyFromContent(account)) {
			this.snotifyService.simple('Copied to clipboard.');
		}
	}

}
