import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from './error/error.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {NgbCollapseModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AccountActivityComponent} from './account-activity/account-activity.component';
import {RouterModule} from '@angular/router';
import {CancelActiveOrdersPopupComponent} from './account-activity/cancel-active-orders-popup/cancel-active-orders-popup.component';
import {PopupModule} from './popup/popup.module';
import {MainChartComponent} from '../dashboard/main-chart/main-chart.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from '@angular/forms';
import {ActivityComponent} from './system-activity/activity.component';
import {CountdownModule} from 'ngx-countdown';
import {AlgoNotificationItemComponent} from './algo-notification-item/algo-notification-item.component';
import {CustomModalComponent} from './custom-modal.component';
import { WalletNotificationItemComponent } from './wallet-notification-item/wallet-notification-item.component';
import { GeneralNotificationItemComponent } from './general-notification-item/general-notification-item.component';
import {RevealSecretKeyPopupComponent} from './popup/reveal-secret-key-popup/reveal-secret-key-popup.component';
import {ActivateAccountPopupComponent} from './popup/activate-account/activate-account-popup.component';
import {XlmLoanPopupComponent} from './popup/xlm-loan-popup/xlm-loan-popup.component';
import {XlmBalanceStatusPopupComponent} from './popup/xlm-balance-status-popup/xlm-balance-status-popup.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    ErrorComponent,
    NavbarComponent,
    AccountActivityComponent,
    CancelActiveOrdersPopupComponent,
    MainChartComponent,
    ActivityComponent,
    AlgoNotificationItemComponent,
    CustomModalComponent,
    WalletNotificationItemComponent,
    GeneralNotificationItemComponent,
    RevealSecretKeyPopupComponent,
    ActivateAccountPopupComponent,
    XlmLoanPopupComponent,
    XlmBalanceStatusPopupComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    FontAwesomeModule,
    NgbTabsetModule,
    RouterModule,
    PopupModule,
    NgSelectModule,
    ChartsModule,
    FormsModule,
    CountdownModule,
    NgbTooltipModule,
    InfiniteScrollModule
  ],
  exports: [
    ErrorComponent,
    NavbarComponent,
    AccountActivityComponent,
    MainChartComponent,
    ActivityComponent,
    AlgoNotificationItemComponent,
    CustomModalComponent,
    WalletNotificationItemComponent,
    GeneralNotificationItemComponent
  ]
})
export class SharedModule { }
