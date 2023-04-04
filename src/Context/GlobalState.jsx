import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
    submission: [
        { id: 1, name: 'Staff 1', deadline_1: '04/04/2023', deadline_2: '04/05/2023' },
        { id: 2, name: 'Staff 2', deadline_1: '04/04/2023', deadline_2: '04/05/2023' },
        { id: 3, name: 'Staff 3', deadline_1: '04/04/2023', deadline_2: '04/05/2023' }
    ]
};
export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const removeSubmission = (id) => {
        dispatch({
            type: "REMOVE_SUBMISSION",
            payload: id
        })
    }
    const addSubmission = (submissions) => {
        dispatch({
            type: "ADD_SUBMISSION",
            payload: submissions
        })
    }
    return (
        <GlobalContext.Provider value={{
            submission: state.submission,
            removeSubmission,
            addSubmission
        }}>
            {children}
        </GlobalContext.Provider>
    )
}