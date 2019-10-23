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
import {UserAlgoSystemFinancialsModel} from './models/user-algo-system-financials.model';
import {AdminService} from '../../../admin.service';

@Component({
  selector: 'app-user-ago-system-financials',
  templateUrl: './user-ago-system-financials.component.html',
  styleUrls: ['./user-ago-system-financials.component.scss']
})
export class UserAgoSystemFinancialsComponent implements OnInit {
	
	selectedTab: {id: string, name: string};
	isSortedUpBySignUpDate: boolean;
	isSortedUpByCurrentAlgoPositionsUSD: boolean;
	isSortedUpByHistoricalAlgoPositionsUSD: boolean;
	isSortedUpByAlgoCommissionsUSD: boolean;
	isSortedUpByOpenAlgoPositions: boolean;
	isSortedUpByClosedAlgoPositions: boolean;
	isSortedUpByGRYOpenPositions: boolean;
	isSortedUpByGRY1OpenPositions: boolean;
	isSortedUpByGRY2OpenPositions: boolean;
	isSortedUpByGRY3OpenPositions: boolean;
	isSortedUpByGRZOpenPositions: boolean;
	userAccounts: UserAlgoSystemFinancialsModel[] = [];
	userAccountTabs = [
		{
			id: 'uapg',
			name: 'User Algo Positions General'
		},
		{
			id: 'uapd',
			name: 'User Algo Positions Detail'
		}
	];
	
	// Font Awesome Icons
	faDownload = faArrowAltCircleDown;
	faInfo = faInfoCircle;
	faCopy = faCopy;
	faSearch = faSearch;
	faSortBySignUpDate = faCaretDown;
	faSortByCurrentAlgoPositionsUSD = faCaretDown;
	faSortByHistoricalAlgoPositionsUSD = faCaretDown;
	faSortByAlgoCommissionsUSD = faCaretDown;
	faSortByOpenAlgoPositions = faCaretDown;
	faSortByClosedAlgoPositions = faCaretDown;
	faSortByGRYOpenPositions = faCaretDown;
	faSortByGRY1OpenPositions = faCaretDown;
	faSortByGRY2OpenPositions = faCaretDown;
	faSortByGRY3OpenPositions = faCaretDown;
	faSortByGRZOpenPositions = faCaretDown;
	
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
		const mockup = new UserAlgoSystemFinancialsModel(
		1,
		"18/08/2019 04:14",
		"Geronimhoxxxyyyzzz",
		"de Chastaine Montaigne",
		"swissalpbunny888@protonmail.ch",
		"GAQQ44...H3399",
		"111222333444555666",
		10000000000000,
		10000000000000,
		10000000000000,
		10000000000000,
		10000000000000,
		10000000000000,
		10000000000000,
		10000000000000,
		10000000000000,
		10000000000000
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
	
	sortByCurrentAlgoPositionUSD() {
		if (this.isSortedUpByCurrentAlgoPositionsUSD) {
			this.faSortByCurrentAlgoPositionsUSD = faCaretDown;
			this.isSortedUpByCurrentAlgoPositionsUSD = false;
		} else {
			this.faSortByCurrentAlgoPositionsUSD = faCaretUp;
			this.isSortedUpByCurrentAlgoPositionsUSD = true;
		}
	}
	
	sortByHistoricalAlgoPositionUSD() {
		if (this.isSortedUpByHistoricalAlgoPositionsUSD) {
			this.faSortByHistoricalAlgoPositionsUSD = faCaretDown;
			this.isSortedUpByHistoricalAlgoPositionsUSD = false;
		} else {
			this.faSortByHistoricalAlgoPositionsUSD = faCaretUp;
			this.isSortedUpByHistoricalAlgoPositionsUSD = true;
		}
	}
	
	sortByAlgoCommissionsUSD() {
		if (this.isSortedUpByAlgoCommissionsUSD) {
			this.faSortByAlgoCommissionsUSD = faCaretDown;
			this.isSortedUpByAlgoCommissionsUSD = false;
		} else {
			this.faSortByAlgoCommissionsUSD = faCaretUp;
			this.isSortedUpByAlgoCommissionsUSD = true;
		}
	}
	
	sortByOpenAlgoPositions() {
		if (this.isSortedUpByOpenAlgoPositions) {
			this.faSortByOpenAlgoPositions = faCaretDown;
			this.isSortedUpByOpenAlgoPositions = false;
		} else {
			this.faSortByOpenAlgoPositions = faCaretUp;
			this.isSortedUpByOpenAlgoPositions = true;
		}
	}
	
	sortByClosedAlgoPositions() {
		if (this.isSortedUpByClosedAlgoPositions) {
			this.faSortByClosedAlgoPositions = faCaretDown;
			this.isSortedUpByClosedAlgoPositions = false;
		} else {
			this.faSortByClosedAlgoPositions = faCaretUp;
			this.isSortedUpByClosedAlgoPositions = true;
		}
	}
	
	sortByGRYOpenPositions() {
		if (this.isSortedUpByGRYOpenPositions) {
			this.faSortByGRYOpenPositions = faCaretDown;
			this.isSortedUpByGRYOpenPositions = false;
		} else {
			this.faSortByGRYOpenPositions = faCaretUp;
			this.isSortedUpByGRYOpenPositions = true;
		}
	}
	
	sortByGRY1OpenPositions() {
		if (this.isSortedUpByGRY1OpenPositions) {
			this.faSortByGRY1OpenPositions = faCaretDown;
			this.isSortedUpByGRY1OpenPositions = false;
		} else {
			this.faSortByGRY1OpenPositions = faCaretUp;
			this.isSortedUpByGRY1OpenPositions = true;
		}
	}
	
	sortByGRY2OpenPositions() {
		if (this.isSortedUpByGRY2OpenPositions) {
			this.faSortByGRY2OpenPositions = faCaretDown;
			this.isSortedUpByGRY2OpenPositions = false;
		} else {
			this.faSortByGRY2OpenPositions = faCaretUp;
			this.isSortedUpByGRY2OpenPositions = true;
		}
	}
	
	sortByGRY3OpenPositions() {
		if (this.isSortedUpByGRY3OpenPositions) {
			this.faSortByGRY3OpenPositions = faCaretDown;
			this.isSortedUpByGRY3OpenPositions = false;
		} else {
			this.faSortByGRY3OpenPositions = faCaretUp;
			this.isSortedUpByGRY3OpenPositions = true;
		}
	}
	
	sortByGRZOpenPositions() {
		if (this.isSortedUpByGRZOpenPositions) {
			this.faSortByGRZOpenPositions = faCaretDown;
			this.isSortedUpByGRZOpenPositions = false;
		} else {
			this.faSortByGRZOpenPositions = faCaretUp;
			this.isSortedUpByGRZOpenPositions = true;
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
	
	onScroll() {
		this.populateUserAccountsArray();
	}

}
