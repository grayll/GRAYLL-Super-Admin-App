import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
	get isNewGRY1UserAccessActive(): boolean {
		return this._isNewGRY1UserAccessActive;
	}
	
	set isNewGRY1UserAccessActive(value: boolean) {
		this._isNewGRY1UserAccessActive = value;
	}
	
	get isNewGRY2UserAccessActive(): boolean {
		return this._isNewGRY2UserAccessActive;
	}
	
	set isNewGRY2UserAccessActive(value: boolean) {
		this._isNewGRY2UserAccessActive = value;
	}
	
	get isNewGRY3UserAccessActive(): boolean {
		return this._isNewGRY3UserAccessActive;
	}
	
	set isNewGRY3UserAccessActive(value: boolean) {
		this._isNewGRY3UserAccessActive = value;
	}
	
	get isNewGRZUserAccessActive(): boolean {
		return this._isNewGRZUserAccessActive;
	}
	
	set isNewGRZUserAccessActive(value: boolean) {
		this._isNewGRZUserAccessActive = value;
	}
	
  private _gry1FunctionActivated: boolean;
  private _gry2FunctionActivated: boolean;
  private _gry3FunctionActivated: boolean;
  private _grzFunctionActivated: boolean;
  private _algoSystemActivated: boolean;
  private _gry1NewUserActivated: boolean;
  private _gry2NewUserActivated: boolean;
  private _gry3NewUserActivated: boolean;
  private _grzNewUserActivated: boolean;
  private _algoSystemNewUserActivated: boolean;
  private _isUserSignUpPaused: boolean;
  private _isNewUserSignUpPaused: boolean;
	private _isUserSignInPaused: boolean;
	private _isNewUserKYCPaused:boolean;
	private _isUserKYCPaused: boolean;
	private _isNewUserSignInPaused: boolean;
	private _didRunFunction4: boolean;
	private _didRunFunction3: boolean;
	private _didRunFunction2: boolean;
	private _isGRY1UserAccessActive: boolean;
	private _isGRY2UserAccessActive: boolean;
	private _isGRY3UserAccessActive: boolean;
	private _isGRZUserAccessActive: boolean;
	private _isNewGRY1UserAccessActive: boolean;
	private _isNewGRY2UserAccessActive: boolean;
	private _isNewGRY3UserAccessActive: boolean;
	private _isNewGRZUserAccessActive: boolean;
	
	get isGRY1UserAccessActive(): boolean {
		return this._isGRY1UserAccessActive;
	}
	
	set isGRY1UserAccessActive(value: boolean) {
		this._isGRY1UserAccessActive = value;
	}
	
	get isGRY2UserAccessActive(): boolean {
		return this._isGRY2UserAccessActive;
	}
	
	set isGRY2UserAccessActive(value: boolean) {
		this._isGRY2UserAccessActive = value;
	}
	
	get isGRY3UserAccessActive(): boolean {
		return this._isGRY3UserAccessActive;
	}
	
	set isGRY3UserAccessActive(value: boolean) {
		this._isGRY3UserAccessActive = value;
	}
	
	get isGRZUserAccessActive(): boolean {
		return this._isGRZUserAccessActive;
	}
	
	set isGRZUserAccessActive(value: boolean) {
		this._isGRZUserAccessActive = value;
	}
	
	get isNewUserSignUpPaused(): boolean {
		return this._isNewUserSignUpPaused;
	}
	
	set isNewUserSignUpPaused(value: boolean) {
		this._isNewUserSignUpPaused = value;
	}
	
	get isNewUserSignInPaused(): boolean {
		return this._isNewUserSignInPaused;
	}
	
	set isNewUserSignInPaused(value: boolean) {
		this._isNewUserSignInPaused = value;
	}

	get isNewUserKYCPaused(): boolean {
		return this._isNewUserKYCPaused;
	}
	
	set isNewUserKYCPaused(value: boolean) {
		this._isNewUserKYCPaused = value;
	}
	
	get didRunFunction4(): boolean {
		return this._didRunFunction4;
	}
	
	set didRunFunction4(value: boolean) {
		this._didRunFunction4 = value;
	}
	
	get didRunFunction3(): boolean {
		return this._didRunFunction3;
	}
	
	set didRunFunction3(value: boolean) {
		this._didRunFunction3 = value;
	}
	
	get didRunFunction2(): boolean {
		return this._didRunFunction2;
	}
	
	set didRunFunction2(value: boolean) {
		this._didRunFunction2 = value;
	}
	
	get isUserSignUpPaused(): boolean {
		return this._isUserSignUpPaused;
	}
	
	set isUserSignUpPaused(value: boolean) {
		this._isUserSignUpPaused = value;
	}
	
	get isUserSignInPaused(): boolean {
		return this._isUserSignInPaused;
	}
	
	set isUserSignInPaused(value: boolean) {
		this._isUserSignInPaused = value;
	}

	get isUserKYCPaused(): boolean {
		return this._isUserKYCPaused;
	}
	
	set isUserKYCPaused(value: boolean) {
		this._isUserKYCPaused = value;
	}
	
	get gry1FunctionActivated(): boolean {
    return this._gry1FunctionActivated;
  }

  set gry1FunctionActivated(value: boolean) {
    this._gry1FunctionActivated = value;
  }

  get gry2FunctionActivated(): boolean {
    return this._gry2FunctionActivated;
  }

  set gry2FunctionActivated(value: boolean) {
    this._gry2FunctionActivated = value;
  }

  get gry3FunctionActivated(): boolean {
    return this._gry3FunctionActivated;
  }

  set gry3FunctionActivated(value: boolean) {
    this._gry3FunctionActivated = value;
  }

  get grzFunctionActivated(): boolean {
    return this._grzFunctionActivated;
  }

  set grzFunctionActivated(value: boolean) {
    this._grzFunctionActivated = value;
  }

  get algoSystemActivated(): boolean {
    return this._algoSystemActivated;
  }

  set algoSystemActivated(value: boolean) {
    this._algoSystemActivated = value;
  }
  
  get gry1NewUserActivated(): boolean {
    return this._gry1NewUserActivated;
  }

  set gry1NewUserActivated(value: boolean) {
    this._gry1NewUserActivated = value;
  }

  get gry2NewUserActivated(): boolean {
    return this._gry2NewUserActivated;
  }

  set gry2NewUserActivated(value: boolean) {
    this._gry2NewUserActivated = value;
  }

  get gry3NewUserActivated(): boolean {
    return this._gry3NewUserActivated;
  }

  set gry3NewUserActivated(value: boolean) {
    this._gry3NewUserActivated = value;
  }

  get grzNewUserActivated(): boolean {
    return this._grzNewUserActivated;
  }

  set grzNewUserActivated(value: boolean) {
    this._grzNewUserActivated = value;
  }

  get algoSystemNewUserActivated(): boolean {
    return this._algoSystemNewUserActivated;
  }

  set algoSystemNewUserActivated(value: boolean) {
    this._algoSystemNewUserActivated = value;
  }
  
  setDidRunAllFunctionsTo(didRun: boolean) {
		this._didRunFunction2 = didRun;
		this.didRunFunction3 = didRun;
		this.didRunFunction4 = didRun;
  }

  constructor() { }
}
