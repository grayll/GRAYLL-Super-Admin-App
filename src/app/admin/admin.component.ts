import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  activeLink: string;
  isNavbarCollapsed = false;

  navigationAdminPages = [
    {
      name: 'User Activity Reports'
    },
    {
      name: 'Algo System Data'
    },
    {
      name: 'Algo System Management'
    },
    {
      name: 'User Management'
    }
  ];

  constructor(
    public adminService: AdminService,
    private router: Router
  ) {
    this.activeLink = 'User Activity Reports';
    let password = prompt("Enter in the password");

    while (password != '!D^gu3+3ej8U6~%+PvJLnfz=u]MU>_b:9') {
      password = prompt("Enter your Password: ");
    }
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('dark-navy-background');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('dark-navy-background');
  }

  toggleFunction(value: string) {
    this.router.navigate(['/admin/overview', { outlets: { popup: 'toggle-function/' + value } }]);
  }

  tabChanged(newTabId: string) {
    this.activeLink = newTabId;
  }

}
