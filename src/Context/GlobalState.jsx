import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
    submission: [
        { id: 1, name: 'staff 1', deadline_1: "04/04/2023", deadline_2: '04/05/2023' },
        { id: 2, name: 'staff 2', deadline_1: "04/04/2023", deadline_2: '04/05/2023' },
        { id: 3, name: 'staff 3', deadline_1: "04/04/2023", deadline_2: '04/05/2023' }
    ],
    role: [
        { id: 1, name: 'staff 1' },
        { id: 2, name: 'staff 2' },
        { id: 3, name: 'staff 3' }
    ],
    department: [
        { id: 1, name: 'staff 1' },
        { id: 2, name: 'staff 2' },
        { id: 3, name: 'staff 3' }
    ],
    category: [
        { id: 1, name: 'staff 1' },
        { id: 2, name: 'staff 2' },
        { id: 3, name: 'staff 3' }
    ],
    user: [
        { id: 1, name: 'staff 1', password: "123456789", email: 'staff1@test.com' },
        { id: 2, name: 'staff 2', password: "123456789", email: 'staff2@test.com' },
        { id: 3, name: 'staff 3', password: "123456789", email: 'staff3@test.com' }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeSubmission = (id) => {
        dispatch({
            type: 'REMOVE_SUBMISSION',
            payload: id
        })
    }
    const removeRole = (id) => {
        dispatch({
            type: 'REMOVE_ROLE',
            payload: id
        })
    }
    const removeDepartment = (id) => {
        dispatch({
            type: 'REMOVE_DEPARTMENT',
            payload: id
        })
    }
    const removeCategory = (id) => {
        dispatch({
            type: 'REMOVE_CATEGORY',
            payload: id
        })
    }
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    const addSubmission = (submissions) => {
        dispatch({
            type: 'ADD_SUBMISSION',
            payload: submissions
        })
    }
    const addRole = (roles) => {
        dispatch({
            type: 'ADD_ROLE',
            payload: roles
        })
    }
    const addDepartment = (departments) => {
        dispatch({
            type: 'ADD_DEPARTMENT',
            payload: departments
        })
    }
    const addCategory = (categories) => {
        dispatch({
            type: 'ADD_CATEGORY',
            payload: categories
        })
    }
    const addUser = (users) => {
        dispatch({
            type: 'ADD_USER',
            payload: users
        })
    }
    const editSubmission = (submissions) => {
        dispatch({
            type: 'EDIT_SUBMISSION',
            payload: submissions
        })
    }

    return (
        <GlobalContext.Provider value={{
            submission: state.submission,
            role: state.role,
            department: state.department,
            category: state.category,
            user: state.user,
            removeSubmission,
            removeRole,
            removeDepartment,
            removeCategory,
            removeUser,
            addSubmission,
            addRole,
            addDepartment,
            addCategory,
            addUser,
            editSubmission
        }}>
            {children}
        </GlobalContext.Provider>
    )
}