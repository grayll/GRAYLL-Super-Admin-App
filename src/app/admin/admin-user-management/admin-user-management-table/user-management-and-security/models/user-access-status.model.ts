export class UserAccessStatusModel {
	constructor(
		public id?: number,
		public signUpDate?: any,
		public firstName?: string,
		public lastName?: string,
		public emailAddress?: string,
		public grayllId?: string,
		public account?: string,
		public phoneNumber?: string,
		public gry1accessActive?: boolean,
		public gry2accessActive?: boolean,
		public gry3accessActive?: boolean,
		public grzaccessActive?: boolean,
		public appSignInActive?: boolean,
		public accountValueUSD?: string
	) {}
}
