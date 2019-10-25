import {Component, OnInit, SimpleChanges} from '@angular/core';
import {
	faArrowAltCircleDown,
	faCaretDown,
	faCaretUp,
	faCopy,
	faInfoCircle,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import {ClipboardService} from 'ngx-clipboard';
import {SnotifyService} from 'ng-snotify';
import {UserAccountFinancialsModel} from './models/user-account-financials.model';
import {AdminService} from '../../../admin.service';

@Component({
  selector: 'app-user-account-financials',
  templateUrl: './user-account-financials.component.html',
  styleUrls: ['./user-account-financials.component.scss']
})
export class UserAccountFinancialsComponent implements OnInit {
	
	selectedTab: {id: string, name: string, small: string};
	isSortedUpBySignUpDate: boolean;
	isSortedUpByAccountValue: boolean;
	isSortedUpByBalanceXLM: boolean;
	isSortedUpByBalanceGRX: boolean;
	isSortedUpByOpenOrdersXLM: boolean;
	isSortedUpByOpenOrdersGRX: boolean;
	isSortedUpByTransfersUSD: boolean;
	isSortedUpByTransfersGRX: boolean;
	isSortedUpByTransfersXLM: boolean;
	userAccounts: UserAccountFinancialsModel[] = [];
	userAccountTabs = [
		{
			id: 'uab',
			name: 'User Account Balances',
			small: 'XLM & GRX Balances Open Orders'
		},
		{
			id: 'uat',
			name: 'User Account Transfers',
			small: 'XLM & GRX Transfers'
		}
	];
	
	// Font Awesome Icons
	faDownload = faArrowAltCircleDown;
	faInfo = faInfoCircle;
	faCopy = faCopy;
	faSearch = faSearch;
	faSortBySignUpDate = faCaretDown;
	faSortByAccountValue = faCaretDown;
	faSortByBalanceXLM = faCaretDown;
	faSortByBalanceGRX = faCaretDown;
	faSortByOpenOrdersXLM = faCaretDown;
	faSortByOpenOrdersGRX = faCaretDown;
	faSortByTotalTransfersGRX = faCaretDown;
	faSortByTotalTransfersXLM = faCaretDown;
	faSortByTotalTransfersUSD = faCaretDown;
	
	constructor(
		private clipboardService: ClipboardService,
		private snotifyService: SnotifyService,
		public adminService: AdminService
	) {
		this.populateUserAccountsArray();
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
	
	private populateUserAccountsArray() {
		const mockup = new UserAccountFinancialsModel(
		1,
		"18/08/2019 04:14",
		"Geronimhoxxxyyyzzz",
		"de Chastaine Montaigne",
		"swissalpbunny888@protonmail.ch",
		"+999 15678888111",
		"111222333444555666",
		"GAQQ44...H3399",
		'100,000,000,000.00',
		'swissalpbunny888',
		'100,000,000,000.00',
		'100,000,000,000.00',
		'100,000,000,000.00',
		'100,000,000,000.00',
		'100,000,000,000.00',
		'100,000,000,000.00',
		'100,000,000,000.00'
		);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
		this.userAccounts.push(mockup);
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
	
	sortByOpenOrdersXLM() {
		if (this.isSortedUpByOpenOrdersXLM) {
			this.faSortByOpenOrdersXLM = faCaretDown;
			this.isSortedUpByOpenOrdersXLM = false;
		} else {
			this.faSortByOpenOrdersXLM = faCaretUp;
			this.isSortedUpByOpenOrdersXLM = true;
		}
	}
	
	sortByOpenOrdersGRX() {
		if (this.isSortedUpByOpenOrdersGRX) {
			this.faSortByOpenOrdersGRX = faCaretDown;
			this.isSortedUpByOpenOrdersGRX = false;
		} else {
			this.faSortByOpenOrdersGRX = faCaretUp;
			this.isSortedUpByOpenOrdersGRX = true;
		}
	}
	
	sortByBalanceGRX() {
		if (this.isSortedUpByBalanceGRX) {
			this.faSortByBalanceGRX = faCaretDown;
			this.isSortedUpByBalanceGRX = false;
		} else {
			this.faSortByBalanceGRX = faCaretUp;
			this.isSortedUpByBalanceGRX = true;
		}
	}
	
	sortByBalanceXLM() {
		if (this.isSortedUpByBalanceXLM) {
			this.faSortByBalanceXLM = faCaretDown;
			this.isSortedUpByBalanceXLM = false;
		} else {
			this.faSortByBalanceXLM = faCaretUp;
			this.isSortedUpByBalanceXLM = true;
		}
	}
	
	sortByTotalTransfersXLM() {
		if (this.isSortedUpByTransfersXLM) {
			this.faSortByTotalTransfersXLM = faCaretDown;
			this.isSortedUpByTransfersXLM = false;
		} else {
			this.faSortByTotalTransfersXLM = faCaretUp;
			this.isSortedUpByTransfersXLM = true;
		}
	}
	
	sortByTotalTransfersGRX() {
		if (this.isSortedUpByTransfersGRX) {
			this.faSortByTotalTransfersGRX = faCaretDown;
			this.isSortedUpByTransfersGRX = false;
		} else {
			this.faSortByTotalTransfersGRX = faCaretUp;
			this.isSortedUpByTransfersGRX = true;
		}
	}
	
	sortByTotalTransfersUSD() {
		if (this.isSortedUpByTransfersUSD) {
			this.faSortByTotalTransfersUSD = faCaretDown;
			this.isSortedUpByTransfersUSD = false;
		} else {
			this.faSortByTotalTransfersUSD = faCaretUp;
			this.isSortedUpByTransfersUSD = true;
		}
	}
	
	onTabChange(id: string) {
		this.userAccounts = [];
		this.populateUserAccountsArray();
		this.selectedTab = this.userAccountTabs.find((t) => t.id === id);
	}
	
	copySuccess(account: string) {
		if (this.clipboardService.copyFromContent(account)) {
			this.snotifyService.simple('Copied to clipboard.');
		}
	}
	
	// Infinite Scroll
	onScroll() {
		this.populateUserAccountsArray();
	}

}
