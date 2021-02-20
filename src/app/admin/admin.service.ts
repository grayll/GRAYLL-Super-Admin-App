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

	private _isGovernment1Activated: boolean;
	private _isGovernment2Activated: boolean;
	private _isGovernment3Activated: boolean;
	private _isGovernment1NewActivated: boolean;
	private _isGovernment2NewActivated: boolean;
	private _isGovernment3NewActivated: boolean;

	get government1Activated(): boolean {
    return this._isGovernment1Activated;
  }

  set government1Activated(value: boolean) {
    this._isGovernment1Activated = value;
	}
	
	get government2Activated(): boolean {
    return this._isGovernment2Activated;
  }

  set government2Activated(value: boolean) {
    this._isGovernment2Activated = value;
	}
	get government3Activated(): boolean {
    return this._isGovernment3Activated;
  }

  set government3Activated(value: boolean) {
    this._isGovernment3Activated = value;
	}
	new
	get government1NewActivated(): boolean {
    return this._isGovernment1NewActivated;
  }

  set government1NewActivated(value: boolean) {
    this._isGovernment1NewActivated = value;
	}
	
	get government2NewActivated(): boolean {
    return this._isGovernment2NewActivated;
  }

  set government2NewActivated(value: boolean) {
    this._isGovernment2NewActivated = value;
	}
	get government3NewActivated(): boolean {
    return this._isGovernment3NewActivated;
  }

  set government3NewActivated(value: boolean) {
    this._isGovernment3NewActivated = value;
	}

	//
	private _isIncome1Activated: boolean;
	private _isIncome2Activated: boolean;
	private _isIncome3Activated: boolean;

	get income1Activated(): boolean {
    return this._isIncome1Activated;
  }
  set income1Activated(value: boolean) {
    this._isIncome1Activated = value;
	}
	get income2Activated(): boolean {
    return this._isIncome2Activated;
  }
  set income2Activated(value: boolean) {
    this._isIncome2Activated = value;
	}
	get income3Activated(): boolean {
    return this._isIncome3Activated;
  }
  set income3Activated(value: boolean) {
    this._isIncome3Activated = value;
	}
//
  private _isAddress1Activated: boolean;
	private _isAddress2Activated: boolean;
	private _isAddress3Activated: boolean;
	private _isAddress4Activated: boolean;
	private _isAddress5Activated: boolean;

	get address1Activated(): boolean {
    return this._isAddress1Activated;
  }
  set address1Activated(value: boolean) {
    this._isAddress1Activated = value;
	}
	get address2Activated(): boolean {
    return this._isAddress2Activated;
  }
  set address2Activated(value: boolean) {
    this._isAddress2Activated = value;
	}
	get address3Activated(): boolean {
    return this._isAddress3Activated;
  }
  set address3Activated(value: boolean) {
    this._isAddress3Activated = value;
	}
	get address4Activated(): boolean {
    return this._isAddress4Activated;
  }
  set address4Activated(value: boolean) {
    this._isAddress4Activated = value;
	}
	get address5Activated(): boolean {
    return this._isAddress5Activated;
  }
  set address5Activated(value: boolean) {
    this._isAddress5Activated = value;
	}

	private _isRegistrationActivated: boolean;

	get registrationActivated(): boolean {
    return this._isRegistrationActivated;
  }
  set registrationActivated(value: boolean) {
    this._isRegistrationActivated = value;
	}

	private _isLiquidAssets1Activated: boolean;
	private _isLiquidAssets2Activated: boolean;
	private _isLiquidAssets3Activated: boolean;

	get liquidAssets1Activated(): boolean {
    return this._isLiquidAssets1Activated;
  }
  set liquidAssets1Activated(value: boolean) {
    this._isLiquidAssets1Activated = value;
	}
	get liquidAssets2Activated(): boolean {
    return this._isLiquidAssets2Activated;
  }
  set liquidAssets2Activated(value: boolean) {
    this._isLiquidAssets2Activated = value;
	}
	get liquidAssets3Activated(): boolean {
    return this._isLiquidAssets3Activated;
  }
  set liquidAssets3Activated(value: boolean) {
    this._isLiquidAssets3Activated = value;
	}

	private _isFinancials1Activated: boolean;
	private _isFinancials2Activated: boolean;
	private _isFinancials3Activated: boolean;
	private _isFinancials4Activated: boolean;
	private _isFinancials5Activated: boolean;
	get financials1Activated(): boolean {
    return this._isFinancials1Activated;
  }
  set financials1Activated(value: boolean) {
    this._isFinancials1Activated = value;
	}
	get financials2Activated(): boolean {
    return this._isFinancials2Activated;
  }
  set financials2Activated(value: boolean) {
    this._isFinancials2Activated = value;
	}
	get financials3Activated(): boolean {
    return this._isFinancials3Activated;
  }
  set financials3Activated(value: boolean) {
    this._isFinancials3Activated = value;
	}
	get financials4Activated(): boolean {
    return this._isFinancials4Activated;
  }
  set financials4Activated(value: boolean) {
    this._isFinancials4Activated = value;
	}
	get financials5Activated(): boolean {
    return this._isFinancials5Activated;
  }
  set financials5Activated(value: boolean) {
    this._isFinancials5Activated = value;
	}

  constructor() { }
}
