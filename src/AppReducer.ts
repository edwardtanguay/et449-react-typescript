interface IAppData {
	fullName: string,
	notes: string[],
	version: number
}

interface IActionUpdateFullName {
	type: 'updateFullName',
	payload: string
}

interface IActionResetAllData {
	type: 'resetAllData',
	payload: IAppData
}

export const initialState: IAppData = {
	fullName: 'Finn Richter',
	notes: ["Note 1", "Note 2", "Note 3"],
	version: 1
}

export const AppReducer = (state: IAppData, action: IActionUpdateFullName | IActionResetAllData) => {
	let newState = structuredClone(state);
	switch (action.type) {
		case 'updateFullName':
			newState.fullName = action.payload;
			break;
		case 'resetAllData':
			newState = structuredClone(action.payload);
			break;
	}
	return newState;
}


