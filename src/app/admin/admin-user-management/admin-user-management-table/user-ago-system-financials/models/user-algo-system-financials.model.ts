export class UserAlgoSystemFinancialsModel {
	constructor(
	public id?: number,
	public signUpDate?: any,
	public firstName?: string,
	public lastName?: string,
	public emailAddress?: string,
	public grayllId?: string,
	public account?: string,
	public algoPositionsCurrentUSD?: number,
	public algoPositionsHistoricalUSD?: number,
	public algoCommissionsUSD?: number,
	public openAlgoPositions?: number,
	public closedAlgoPositions?: number,
	public gryOpenPositions?: number,
	public gry1OpenPositions?: number,
	public gry2OpenPositions?: number,
	public gry3OpenPositions?: number,
	public grzOpenPositions?: number,
	) {}
}
