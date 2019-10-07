import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {AdminService} from '../../admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-activate-pause-system',
  templateUrl: './activate-pause-system.component.html',
  styleUrls: ['./activate-pause-system.component.scss']
})
export class ActivatePauseSystemComponent implements OnInit {

  @ViewChild('content') modal;
  asset: string;
  activated: boolean;
  newUserPositionsActivated: boolean;
  password: string;
  success: boolean;
  errorMessage: string;
  didLoadContent: boolean;

  constructor(
    public popupService: PopupService,
    public adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.popupService.open(this.modal);
    this.loadAssetFromRoute();
  }

  private loadAssetFromRoute() {
    this.asset = this.route.snapshot.params.value;
    this.populateActivatedStatus();
  }

  private populateActivatedStatus() {
    switch (this.asset) {
      case 'GRY | 1':
        this.activated = this.adminService.gry1FunctionActivated;
        this.newUserPositionsActivated = this.adminService.gry1NewUserActivated;
        break;
      case 'GRY | 2':
        this.activated = this.adminService.gry2FunctionActivated;
        this.newUserPositionsActivated = this.adminService.gry2NewUserActivated;
        break;
      case 'GRY | 3':
        this.activated = this.adminService.gry3FunctionActivated;
        this.newUserPositionsActivated = this.adminService.gry3NewUserActivated;
        break;
      case 'GRZ':
        this.activated = this.adminService.grzFunctionActivated;
        this.newUserPositionsActivated = this.adminService.grzNewUserActivated;
        break;
      default:
        this.activated = this.adminService.algoSystemActivated;
        this.newUserPositionsActivated = this.adminService.algoSystemNewUserActivated;
        break;
    }
    setTimeout(() => {
      this.didLoadContent = true;
    }, 100);
  }

  save() {
    this.errorMessage = null;
    if (this.clientValidation()) {
      this.success = true;
      switch (this.asset) {
        case 'GRY | 1':
          this.adminService.gry1FunctionActivated = this.activated;
          this.adminService.gry1NewUserActivated = this.newUserPositionsActivated;
          break;
        case 'GRY | 2':
          this.adminService.gry2FunctionActivated = this.activated;
          this.adminService.gry2NewUserActivated = this.newUserPositionsActivated;
          break;
        case 'GRY | 3':
          this.adminService.gry3FunctionActivated = this.activated;
          this.adminService.gry3NewUserActivated = this.newUserPositionsActivated;
          break;
        case 'GRZ':
          this.adminService.grzFunctionActivated = this.activated;
          this.adminService.grzNewUserActivated = this.newUserPositionsActivated;
          break;
        default:
          this.adminService.algoSystemActivated = this.activated;
          this.adminService.algoSystemNewUserActivated = this.newUserPositionsActivated;
          break;
      }
    }
  }

  clientValidation(): boolean {
    if (!this.password || this.password === '') {
      this.errorMessage = 'Please enter your password.';
      return false;
    }
    return true;
  }

}
