import React, { createContext, useReducer } from 'react';

const initialState: IApplicationState = {
	clients: [],
	clientDetails: {
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
	},
	searchCriteria: '',
	filteredClients: [],
};

export const StateContext = createContext<{
	state: IApplicationState;
	dispatch: React.Dispatch<Action>;
}>(
	// @ts-ignore
	null,
);

export const ACTIONS = {
	FETCH_ALL_CLIENTS: 'FETCH_ALL_CLIENTS',
	SEARCH_CLIENT: 'SEARCH_CLIENT',
};

type Action = {
	type: keyof typeof ACTIONS;
	data: any;
};

const reducer = (state: IApplicationState, action: Action) => {
	switch (action.type) {
		case ACTIONS.FETCH_ALL_CLIENTS:
			return { ...state, clients: action.data, filteredClients: action.data };
		case ACTIONS.SEARCH_CLIENT:
			const searchString = action.data.toLowerCase();
			const filtered = state.clients.reduce((acc: IClient[], curr) => {
				const findInField = Object.values(curr).find(field => field.toLowerCase().indexOf(searchString) !== -1);
				if (findInField) {
					acc.push(curr);
				}
				return acc;
			}, []);
			return { ...state, filteredClients: filtered };
		default:
			return state;
	}
};

export default function DataProvider({
										 children,
									 }: {
	children?: React.ReactNode;
}) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StateContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</StateContext.Provider>
	);
}
