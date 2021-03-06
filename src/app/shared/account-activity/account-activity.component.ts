import { Component, Input, OnInit } from '@angular/core';
import { faArrowAltCircleDown, faCopy, faInfoCircle, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ClipboardService } from 'ngx-clipboard';
import { SnotifyService } from 'ng-snotify';
import { OrderModel } from './models/order.model';
import { TransfersModel } from './models/transfers.model';
import { NetworkHistoryModel } from './models/network-history.model';

@Component({
	selector: 'app-account-activity',
	templateUrl: './account-activity.component.html',
	styleUrls: ['./account-activity.component.scss']
})
export class AccountActivityComponent implements OnInit {

	@Input() showMoreDetails: boolean;
	@Input() activeTabId: string;
	@Input() showAllCompletedOrders: boolean;
	@Input() scrollToCompletedOrders: boolean;
	@Input() userAccount: string;

	selectedTab: { id: string, name: string };
	activityTabs = [
		{
			id: 'allOrders',
			name: 'All Orders'
		},
		{
			id: 'transfers',
			name: 'Transfers'
		},
		{
			id: 'networkHistory',
			name: 'Network History'
		}
	];

	openOrders: OrderModel[] = [];
	completedOrders: OrderModel[] = [];
	transfers: TransfersModel[] = [];
	networkHistories: NetworkHistoryModel[] = [];

	// Font Awesome Icons
	faDownload = faArrowAltCircleDown;
	faClose = faTimesCircle;
	faInfo = faInfoCircle;
	faCopy = faCopy;
	faSearch = faSearch;

	txtSearch: any;

	constructor(
		private clipboardService: ClipboardService,
		private snotifyService: SnotifyService
	) {
		this.selectedTab = this.activityTabs[0];
		this.populateOpenOrders();
		this.populateCompletedOrders();
		this.populateNetworkHistory();
		this.populateTransfers();
	}

	ngOnInit() {
		this.setActiveTab();
	}

	private populateOpenOrders() {
		const mockup = new OrderModel(
			1,
			'18/08/2019 04:14',
			'BUY',
			'GRAYLL',
			'grayll.io',
			'1.00000',
			'0',
			'0.1450',
			'0.1450',
			'0.1450',
			'0.1450'
		);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.openOrders.push(mockup);
		this.originalOpenOrders = Object.assign([], this.openOrders);
	}

	private populateCompletedOrders() {
		const mockup = new OrderModel(
			1,
			'18/08/2019 04:14',
			'BUY',
			'GRAYLL',
			'grayll.io',
			'1.00000',
			'0',
			'0.1450',
			'0.1450',
			'0.1450',
			'0.1450'
		);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.completedOrders.push(mockup);
		this.originalCompletedOrders = Object.assign([], this.completedOrders);
	}

	private populateNetworkHistory() {
		const mockup = new NetworkHistoryModel(
			'0108181408618385411',
			'05/08/2019 20:01',
			'Credited',
			'+15.6850428',
			'XLM',
			'GAQQZM...ODH333'
		);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.networkHistories.push(mockup);
		this.originalNetworkHistories = Object.assign([], this.networkHistories);
	}

	private populateTransfers() {
		const mockup = new TransfersModel(
			1,
			'05/08/2019 18:29',
			'GBMF3W...JGX4OG',
			'XLM',
			'Stellar',
			'-29,999,999,999,999.22222'
		);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.transfers.push(mockup);
		this.originalTransfers = Object.assign([], this.transfers);
	}

	private setActiveTab() {
		if (this.activeTabId) {
			this.selectedTab = this.activityTabs.find((t) => t.id === this.activeTabId);
			if (this.scrollToCompletedOrders) {
				setTimeout(() => {
					const el = document.getElementById('completedOrdersContainer');
					el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
				}, 500);
			}
		}
	}

	onScrollOpenOrders() {
		this.populateOpenOrders();
	}

	onScrollCompletedOrders() {
		this.populateCompletedOrders();
	}

	onScrollNetworkHistory() {
		this.populateNetworkHistory();
	}

	onScrollTransfers() {
		this.populateTransfers();
	}

	onTabChange(id: string) {
		this.selectedTab = this.activityTabs.find((t) => t.id === id);
	}

	copySuccess(account: string) {
		if (this.clipboardService.copyFromContent(account)) {
			this.snotifyService.simple('Copied to clipboard.');
		}
	}

	originalNetworkHistories: any;
	originalCompletedOrders: any;
	originalOpenOrders: any;
	originalTransfers: any;
	searchChange() {
		console.log("search : ", this.txtSearch);
		if (this.txtSearch.length > 2) {
			this.networkHistories = this.originalNetworkHistories.filter(s =>
				s.asset.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.id.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.operation.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.amount.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.date.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.account.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1
			);
			this.completedOrders = this.originalCompletedOrders.filter(s =>
				s.id.toString().toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.date.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.type.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.asset.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.issuer.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.amount.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.filled.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.priceXLM.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.priceUSD.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.totalPriceUSD.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.totalPriceXLM.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1
			);
			this.openOrders = this.originalOpenOrders.filter(s =>
				s.id.toString().toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.date.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.type.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.asset.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.issuer.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.amount.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.filled.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.priceXLM.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.priceUSD.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.totalPriceUSD.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.totalPriceXLM.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1
			);
			this.transfers = this.originalTransfers.filter(s =>
				s.asset.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.counterparty.toString().toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.amount.toString().toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.issuer.toString().toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 ||
				s.date.toLowerCase().indexOf(this.txtSearch.toLowerCase()) > -1 
			);
		}
		else if (this.txtSearch.length == 0) {
			this.networkHistories = this.originalNetworkHistories;
			this.completedOrders = this.originalCompletedOrders;
			this.transfers = this.originalTransfers;
			this.openOrders=this.originalOpenOrders;
		}
	}

}
