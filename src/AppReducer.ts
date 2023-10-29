interface IAppData {
	fullName: string,
	notes: string[],
	version: number
}

interface IAction {
	type: string,
	payload: unknown
}

export const initialState: IAppData = {
	fullName: 'Finn Richter',
	notes: ["Note 1", "Note 2", "Note 3"],
	version: 1
}

export const AppReducer = (state: IAppData, action: IAction) => {
	let newState = structuredClone(state);
	let payload: string | IAppData;
	switch (action.type) {
		case 'updateFullName':
			payload = action.payload as string;
			newState.fullName = payload;
			break;
		case 'resetAllData':
			payload = action.payload as IAppData;
			newState = structuredClone(payload);
			break;
	}
	return newState;
}