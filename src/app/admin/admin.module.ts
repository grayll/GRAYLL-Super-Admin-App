import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {NgbCollapseModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {UserManagementComponent} from './user-management/user-management.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {SharedModule} from '../shared/shared.module';
import {ChartsModule} from 'ng2-charts';
import { AlgoSystemManagementComponent } from './algo-system-management/algo-system-management.component';
import { ChangeTimeRateComponent } from './algo-system-management/change-time-rate/change-time-rate.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import { AssetValueTimeComponent } from './algo-system-management/asset-value-time/asset-value-time.component';
import { FunctionOneComponent } from './algo-system-management/function-one/function-one.component';
import { FunctionTwoComponent } from './algo-system-management/function-two/function-two.component';
import { FunctionThreeComponent } from './algo-system-management/function-three/function-three.component';
import { FunctionFourComponent } from './algo-system-management/function-four/function-four.component';
import { FunctionAlgorithmComponent } from './algo-system-management/function-algorithm/function-algorithm.component';
import { PriceChangeSupplyComponent } from './algo-system-management/price-change-supply/price-change-supply.component';
import { IncreaseTotalDecreaseReserveSupplyComponent } from './algo-system-management/increase-total-decrease-reserve-supply/increase-total-decrease-reserve-supply.component';
import { IncreaseTotalDecreaseAvailableSupplyComponent } from './algo-system-management/increase-total-decrease-available-supply/increase-total-decrease-available-supply.component';
import { ActivatePauseSystemComponent } from './popups/activate-pause-system/activate-pause-system.component';
import {PopupModule} from '../shared/popup/popup.module';
import { AlgoSystemDataComponent } from './algo-system-data/algo-system-data.component';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';
import { AdminUserManagementTableComponent } from './admin-user-management/admin-user-management-table/admin-user-management-table.component';
import { UserAccountsAndRegistrationComponent } from './admin-user-management/admin-user-management-table/user-accounts-and-registration/user-accounts-and-registration.component';
import { ConfirmStatusComponent } from './admin-user-management/admin-user-management-table/user-accounts-and-registration/confirm-status/confirm-status.component';
import { UserAccountFinancialsComponent } from './admin-user-management/admin-user-management-table/user-account-financials/user-account-financials.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    AlgoSystemManagementComponent,
    ChangeTimeRateComponent,
    AssetValueTimeComponent,
    FunctionOneComponent,
    FunctionTwoComponent,
    FunctionThreeComponent,
    FunctionFourComponent,
    FunctionAlgorithmComponent,
    PriceChangeSupplyComponent,
    IncreaseTotalDecreaseReserveSupplyComponent,
    IncreaseTotalDecreaseAvailableSupplyComponent,
    ActivatePauseSystemComponent,
    AlgoSystemDataComponent,
    AdminUserManagementComponent,
    AdminUserManagementTableComponent,
    UserAccountsAndRegistrationComponent,
    ConfirmStatusComponent,
    UserAccountFinancialsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbCollapseModule,
    FontAwesomeModule,
    ChartsModule,
    SharedModule,
    NgbTabsetModule,
    NgSelectModule,
    FormsModule,
    PopupModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AdminModule { }
