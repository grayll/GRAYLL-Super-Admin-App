export class UserAlgoSystemFinancialsModel {
	constructor(
	public id?: number,
	public signUpDate?: any,
	public firstName?: string,
	public lastName?: string,
	public emailAddress?: string,
	public grayllId?: string,
	public account?: string,
	public algoPositionsCurrentUSD?: string,
	public algoPositionsHistoricalUSD?: string,
	public algoCommissionsUSD?: string,
	public openAlgoPositions?: string,
	public closedAlgoPositions?: string,
	public gryOpenPositions?: string,
	public gry1OpenPositions?: string,
	public gry2OpenPositions?: string,
	public gry3OpenPositions?: string,
	public grzOpenPositions?: string
	) {}
}
