import {Component, OnInit} from '@angular/core';
import {
	faArrowAltCircleDown,
	faCaretDown,
	faCaretUp,
	faCopy,
	faInfoCircle,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import {AdminService} from '../../../admin.service';
import {UserAccessStatusModel} from './models/user-access-status.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-management-and-security',
  templateUrl: './user-management-and-security.component.html',
  styleUrls: ['./user-management-and-security.component.scss']
})
export class UserManagementAndSecurityComponent implements OnInit {
	
	isSortedUpBySignUpDate: boolean;
	isSortedUpByGRY1Access: boolean;
	isSortedUpByGRY2Access: boolean;
	isSortedUpByGRY3Access: boolean;
	isSortedUpByGRZAccess: boolean;
	isSortedUpByAppSignIn: boolean;
	
	selectedTab: {id: string, name: string};
	selectedUser: UserAccessStatusModel;
	userAccounts: UserAccessStatusModel[] = [];
	userAccountTabs = [
		{
			id: 'uas',
			name: 'User Access Status'
		},
		{
			id: 'uad',
			name: 'User Account Details'
		}
	];
	
	// Font Awesome Icons
	faDownload = faArrowAltCircleDown;
	faInfo = faInfoCircle;
	faCopy = faCopy;
	faSearch = faSearch;
	faSortBySignUpDate = faCaretDown;
	faSortByGRY1Access  = faCaretDown;
	faSortByGRZAccess = faCaretDown;
	faSortByGRY2Access = faCaretDown;
	faSortByGRY3Access = faCaretDown;
	faSortByAppSignIn = faCaretDown;

	governmentStatus: boolean;
	userApplicationStatus: boolean;

	constructor(
	public adminService: AdminService,
	private router: Router
	) {
		this.populateUserAccountsArray();
		this.setActiveTab();
		this.changeUserApplication();
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
	
	sortByGRY1() {
		if (this.isSortedUpByGRY1Access) {
			this.faSortByGRY1Access = faCaretDown;
			this.isSortedUpByGRY1Access = false;
		} else {
			this.faSortByGRY1Access = faCaretUp;
			this.isSortedUpByGRY1Access = true;
		}
	}
	
	sortByGRY2() {
		if (this.isSortedUpByGRY2Access) {
			this.faSortByGRY2Access = faCaretDown;
			this.isSortedUpByGRY2Access = false;
		} else {
			this.faSortByGRY2Access = faCaretUp;
			this.isSortedUpByGRY2Access = true;
		}
	}
	
	sortByGRY3() {
		if (this.isSortedUpByGRY3Access) {
			this.faSortByGRY3Access = faCaretDown;
			this.isSortedUpByGRY3Access = false;
		} else {
			this.faSortByGRY3Access = faCaretUp;
			this.isSortedUpByGRY3Access = true;
		}
	}
	
	sortByGRZ() {
		if (this.isSortedUpByGRZAccess) {
			this.faSortByGRZAccess = faCaretDown;
			this.isSortedUpByGRZAccess = false;
		} else {
			this.faSortByGRZAccess = faCaretUp;
			this.isSortedUpByGRZAccess = true;
		}
	}
	
	sortByAppSignIn() {
		if (this.isSortedUpByAppSignIn) {
			this.faSortByAppSignIn = faCaretDown;
			this.isSortedUpByAppSignIn = false;
		} else {
			this.faSortByAppSignIn = faCaretUp;
			this.isSortedUpByAppSignIn = true;
		}
	}
	
	private populateUserAccountsArray() {
		for (let i = 0; i < 10; i++) {
			this.userAccounts.push(new UserAccessStatusModel(
				i,
				"18/08/2019 04:14",
				"Geronimhoxxxyyyzzz",
				"de Chastaine Montaigne",
				"swissalpbunny888@protonmail.ch",
				"111222333444555666",
				"GAQQ44...H3399",
				'+999 15678888111',
				false,
				true,
				false,
				true,
				false,
				true,
				'1,000,000,000,000.00'
				));
		}
		console.log("--->", this.userAccounts);
	}
	
	onTabChange(id: string) {
		this.userAccounts = [];
		this.populateUserAccountsArray();
		this.selectedTab = this.userAccountTabs.find((t) => t.id === id);
	}
	
	onScroll() {
		this.populateUserAccountsArray();
	}
	
	goToUserAccountDetails(user: UserAccessStatusModel) {
		this.selectedTab = this.userAccountTabs[1];
		this.selectedUser = user;
	}
	checkKYCStatus(user: UserAccessStatusModel) {
		this.selectedUser = user;
		this.selectedUser.kycStatus = !user.kycStatus;
	}
	changeUserApplication() {
		this.userApplicationStatus = ! this.userApplicationStatus;
	}
}
