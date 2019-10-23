import {Component, OnInit} from '@angular/core';
import {
	faArrowAltCircleDown,
	faCaretDown,
	faCaretUp,
	faCopy,
	faInfoCircle,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import {UserSettingAccountModel} from './models/user-setting-account.model';
import {AdminService} from '../../../admin.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
	
	isSortedUpBySignUpDate: boolean;
	isSortedUpByBalanceUSD: boolean;
	isSortedUpByAlgoPositions: boolean;
	isSortedUpBy2FA: boolean;
	isSortedUpByIPAddressConfirmation: boolean;
	isSortedUpByMultisigTransactions: boolean;
	isSortedUpByRFPeriod: boolean;
	isSortedUpByWalletBalance: boolean;
	isSortedUpByAccountValue: boolean;
	isSortedUpByAccountProfit: boolean;
	isSortedUpByOpenPosition: boolean;
	isSortedUpByGNEmail: boolean;
	isSortedUpByGNApp: boolean;
	isSortedUpByWNEmail: boolean;
	isSortedUpByWNApp: boolean;
	isSortedUpByANEmail: boolean;
	isSortedUpByANApp: boolean;
	
	selectedTab: {id: string, name: string};
	userAccounts: UserSettingAccountModel[] = [];
	userAccountTabs = [
		{
			id: 'uss',
			name: 'User Security Settings'
		},
		{
			id: 'uds',
			name: 'User Data Settings'
		},
		{
			id: 'uns',
			name: 'User Notifications Settings'
		}
	];
	
	// Font Awesome Icons
	faDownload = faArrowAltCircleDown;
	faInfo = faInfoCircle;
	faCopy = faCopy;
	faSearch = faSearch;
	faSortBySignUpDate = faCaretDown;
	faSortByBalanceUSD = faCaretDown;
	faSortByAlgoPositions = faCaretDown;
	faSortBy2FA = faCaretDown;
	faSortByIPAddressConfirmation = faCaretDown;
	faSortByMultisigTransactions = faCaretDown;
	faSortByRFPeriod = faCaretDown;
	faSortByRFWalletBalance = faCaretDown;
	faSortByAccountValue = faCaretDown;
	faSortByAccountProfit = faCaretDown;
	faSortByOpenPosition = faCaretDown;
	faSortByGNEmail = faCaretDown;
	faSortByGNApp = faCaretDown;
	faSortByWNEmail = faCaretDown;
	faSortByWNApp = faCaretDown;
	faSortByANEmail = faCaretDown;
	faSortByANApp = faCaretDown;
	
  constructor(
    public adminService: AdminService
  ) {
  	this.populateUserAccountsArray();
	  this.setActiveTab();
  }

  ngOnInit() {
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
	
	sortByBalanceUSD() {
		if (this.isSortedUpByBalanceUSD) {
			this.faSortByBalanceUSD = faCaretDown;
			this.isSortedUpByBalanceUSD = false;
		} else {
			this.faSortByBalanceUSD = faCaretUp;
			this.isSortedUpByBalanceUSD = true;
		}
	}
	
	sortByAlgoPositions() {
		if (this.isSortedUpByAlgoPositions) {
			this.faSortByAlgoPositions = faCaretDown;
			this.isSortedUpByAlgoPositions = false;
		} else {
			this.faSortByAlgoPositions = faCaretUp;
			this.isSortedUpByAlgoPositions = true;
		}
	}
	
	sortBy2FA() {
		if (this.isSortedUpBy2FA) {
			this.faSortBy2FA = faCaretDown;
			this.isSortedUpBy2FA = false;
		} else {
			this.faSortBy2FA = faCaretUp;
			this.isSortedUpBy2FA = true;
		}
	}
	
	sortByIPAddressConfirmation() {
		if (this.isSortedUpByIPAddressConfirmation) {
			this.faSortByIPAddressConfirmation = faCaretDown;
			this.isSortedUpByIPAddressConfirmation = false;
		} else {
			this.faSortByIPAddressConfirmation = faCaretUp;
			this.isSortedUpByIPAddressConfirmation = true;
		}
	}
	
	sortByMultisigTransactions() {
		if (this.isSortedUpByMultisigTransactions) {
			this.faSortByMultisigTransactions = faCaretDown;
			this.isSortedUpByMultisigTransactions = false;
		} else {
			this.faSortByMultisigTransactions = faCaretUp;
			this.isSortedUpByMultisigTransactions = true;
		}
	}
	
	sortByRFPeriod() {
		if (this.isSortedUpByRFPeriod) {
			this.faSortByRFPeriod = faCaretDown;
			this.isSortedUpByRFPeriod = false;
		} else {
			this.faSortByRFPeriod = faCaretUp;
			this.isSortedUpByRFPeriod = true;
		}
	}
	
	sortByRFWalletBalance() {
		if (this.isSortedUpByWalletBalance) {
			this.faSortByRFWalletBalance = faCaretDown;
			this.isSortedUpByWalletBalance = false;
		} else {
			this.faSortByRFWalletBalance = faCaretUp;
			this.isSortedUpByWalletBalance = true;
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
	
	sortByAccountProfit() {
		if (this.isSortedUpByAccountProfit) {
			this.faSortByAccountProfit = faCaretDown;
			this.isSortedUpByAccountProfit = false;
		} else {
			this.faSortByAccountProfit = faCaretUp;
			this.isSortedUpByAccountProfit = true;
		}
	}
	
	sortByOpenPosition() {
		if (this.isSortedUpByOpenPosition) {
			this.faSortByOpenPosition = faCaretDown;
			this.isSortedUpByOpenPosition = false;
		} else {
			this.faSortByOpenPosition = faCaretUp;
			this.isSortedUpByOpenPosition = true;
		}
	}
	
	sortByGNEmail() {
		if (this.isSortedUpByGNEmail) {
			this.faSortByGNEmail = faCaretDown;
			this.isSortedUpByGNEmail = false;
		} else {
			this.faSortByGNEmail = faCaretUp;
			this.isSortedUpByGNEmail = true;
		}
	}
	
	sortByGNApp() {
		if (this.isSortedUpByGNApp) {
			this.faSortByGNApp = faCaretDown;
			this.isSortedUpByGNApp = false;
		} else {
			this.faSortByGNApp = faCaretUp;
			this.isSortedUpByGNApp = true;
		}
	}
	
	sortByWNEmail() {
		if (this.isSortedUpByWNEmail) {
			this.faSortByWNEmail = faCaretDown;
			this.isSortedUpByWNEmail = false;
		} else {
			this.faSortByWNEmail = faCaretUp;
			this.isSortedUpByWNEmail = true;
		}
	}
	
	sortByWNApp() {
		if (this.isSortedUpByWNApp) {
			this.faSortByWNApp = faCaretDown;
			this.isSortedUpByWNApp = false;
		} else {
			this.faSortByWNApp = faCaretUp;
			this.isSortedUpByWNApp = true;
		}
	}
	
	sortByANEmail() {
		if (this.isSortedUpByANEmail) {
			this.faSortByANEmail = faCaretDown;
			this.isSortedUpByANEmail = false;
		} else {
			this.faSortByANEmail = faCaretUp;
			this.isSortedUpByANEmail = true;
		}
	}
	
	sortByANApp() {
		if (this.isSortedUpByANApp) {
			this.faSortByANApp = faCaretDown;
			this.isSortedUpByANApp = false;
		} else {
			this.faSortByANApp = faCaretUp;
			this.isSortedUpByANApp = true;
		}
	}
	
	private populateUserAccountsArray() {
		const mockup = new UserSettingAccountModel(
		1,
		"18/08/2019 04:14",
		"Geronimhoxxxyyyzzz",
		"de Chastaine Montaigne",
		"swissalpbunny888@protonmail.ch",
		"GAQQ44...H3399",
		"111222333444555666",
		10000000000000,
		10000000000000,
		true,
		false,
		true,
		'Daily',
		true,
		false,
		true,
		false
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
	
	onTabChange(id: string) {
		this.userAccounts = [];
		this.populateUserAccountsArray();
		this.selectedTab = this.userAccountTabs.find((t) => t.id === id);
	}
	
	onScroll() {
		this.populateUserAccountsArray();
	}

}
