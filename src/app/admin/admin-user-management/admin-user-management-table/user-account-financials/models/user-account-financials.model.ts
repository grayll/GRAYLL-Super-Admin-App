export class UserAccountFinancialsModel {
	constructor(
	public id?: number,
	public signUpDate?: any,
	public firstName?: string,
	public lastName?: string,
	public emailAddress?: string,
	public phoneNumber?: string,
	public grayllId?: string,
	public account?: string,
	public accountValueUSD?: string,
	public federationAddress?: string,
	public accountBalanceXLM?: string,
	public accountBalanceGRX?: string,
	public openOrdersXLMUSD?: string,
	public openOrdersGRXUSD?: string,
	public totalTransfersUSD?: string,
	public totalTransfersXLM?: string,
	public totalTransfersGRX?: string
	) {}
}
