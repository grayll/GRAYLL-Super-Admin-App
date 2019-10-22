export class UserAccountModel {
	constructor(
		public id?: number,
		public signUpDate?: any,
		public firstName?: string,
		public lastName?: string,
		public emailAddress?: string,
		public phoneNumber?: string,
		public grayllId?: string,
		public account?: string,
		public accountValueUSD?: number,
		public algoPositionsValueUSD?: number,
		public algoCommissionsUSD?: number
	) {}
}
