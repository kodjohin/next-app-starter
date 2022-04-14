import { createContext, FC, useReducer } from "react";

const initialState = {};

//****** Create context */
export const Context = createContext(initialState);

//****** Create reducer */
const AppReducer = (state: any, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};
//****** Provider component */
interface Props {
	children?: React.ReactNode;
}
export const AppProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// #region Actions

	// #endregion Actions
	// console.log("render appProvider");
	return <Context.Provider value={{}}>{children}</Context.Provider>;
};
