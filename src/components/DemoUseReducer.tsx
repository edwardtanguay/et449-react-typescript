import { useReducer } from 'react';
import { initialState, AppReducer } from "../AppReducer"

export const DemoUseReducer = () => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<>
			<h2>Demo of useReducer</h2>
			<ul>
				<li>Full name: {state.fullName}</li>
				<li>Notes: {state.notes.join(', ')}</li>
				<li>Version: {state.version}</li>
			</ul>
			<button className='mr-3' onClick={() => dispatch({type: 'updateFullName', payload: 'new name'})}>Change full name</button>
			<button onClick={() => dispatch({type: 'resetAllData', payload: {fullName: '-----', notes: ['---', '---', '---'], version: 0}})}>Change full name</button>
		</>
	)
}