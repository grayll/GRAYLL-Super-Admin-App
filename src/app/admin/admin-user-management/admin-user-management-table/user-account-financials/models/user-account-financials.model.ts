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
	public accountValueUSD?: number,
	public federationAddress?: string,
	public accountBalanceXLM?: number,
	public accountBalanceGRX?: number,
	public openOrdersXLMUSD?: number,
	public openOrdersGRXUSD?: number,
	public totalTransfersUSD?: number,
	public totalTransfersXLM?: number,
	public totalTransfersGRX?: number
	) {}
}
