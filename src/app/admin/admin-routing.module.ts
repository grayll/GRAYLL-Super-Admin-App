import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {NgModule} from '@angular/core';
import {UserManagementComponent} from './user-management/user-management.component';
import {ActivatePauseSystemComponent} from './popups/activate-pause-system/activate-pause-system.component';

const popupRoutes: Routes = [
  {
    path: 'toggle-function/:value',
    component: ActivatePauseSystemComponent,
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
