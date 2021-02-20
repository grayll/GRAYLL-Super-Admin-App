import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {NgModule} from '@angular/core';
import {UserManagementComponent} from './user-management/user-management.component';
import {ActivatePauseSystemComponent} from './popups/activate-pause-system/activate-pause-system.component';
import {ConfirmStatusComponent} from './admin-user-management/admin-user-management-table/user-accounts-and-registration/confirm-status/confirm-status.component';
import {ConfirmUserAccessStatusComponent} from './admin-user-management/admin-user-management-table/user-management-and-security/popups/confirm-user-access-status/confirm-user-access-status.component';
import {ConfirmKycAcceptStatusComponent} from './admin-user-management/admin-user-management-table/user-management-and-security/popups/confirm-kyc-accept-status/confirm-kyc-accept-status.component';
import {ConfirmKycDeclineStatusComponent} from './admin-user-management/admin-user-management-table/user-management-and-security/popups/confirm-kyc-decline-status/confirm-kyc-decline-status.component';
const popupRoutes: Routes = [
  {
    path: 'toggle-function/:value',
    component: ActivatePauseSystemComponent,
    outlet: 'popup'
  },
	{
		path: 'confirm-status/:value',
		component: ConfirmStatusComponent,
		outlet: 'popup'
	},
	{
		path: 'confirm-status/:value/:grayllId',
		component: ConfirmStatusComponent,
		outlet: 'popup'
	},
	{
		path: 'confirm-user-access-status/:value',
		component: ConfirmUserAccessStatusComponent,
		outlet: 'popup'
  },
  {
    path:'kyc-document-approval/:value',
    component: ConfirmKycAcceptStatusComponent,
    outlet: 'popup'
  },
  {
    path:'kyc-document-decline/:value',
    component: ConfirmKycDeclineStatusComponent,
    outlet: 'popup'
  }
];

const sidebarRoutes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    outlet: 'admin'
  }
];

const routes: Routes = [
  {
    path: 'overview',
    component: AdminComponent,
    children: [...sidebarRoutes, ...popupRoutes]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class AdminRoutingModule {}
