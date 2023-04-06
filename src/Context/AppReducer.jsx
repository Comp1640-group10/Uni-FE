
export default (state, action) => {

    switch (action.type) {
        case 'REMOVE_SUBMISSION':
            return {
                submission: state.submission.filter((submissions) => {
                    return submissions.id !== action.payload
                })
            }
        case 'REMOVE_ROLE':
            return {
                role: state.role.filter((roles) => {
                    return roles.id !== action.payload
                })
            }
        case 'REMOVE_DEPARTMENT':
            return {
                department: state.department.filter((departments) => {
                    return departments.id !== action.payload
                })
            }
        case 'REMOVE_CATEGORY':
            return {
                category: state.category.filter((categories) => {
                    return categories.id !== action.payload
                })
            }
        case 'REMOVE_USER':
            return {
                user: state.user.filter((users) => {
                    return users.id !== action.payload
                })
            }
        case "ADD_SUBMISSION":
            return {
                submission: [action.payload, ...state.submission]
            }
        case "ADD_ROLE":
            return {
                role: [action.payload, ...state.role]
            }
        case "ADD_DEPARTMENT":
            return {
                department: [action.payload, ...state.department]
            }
        case "ADD_CATEGORY":
            return {
                category: [action.payload, ...state.category]
            }
        case "ADD_USER":
            return {
                user: [action.payload, ...state.user]
            }
        case "EDIT_SUBMISSION":

            const updateSumission = action.payload

            const updateSumissions = state.submission.map((submissions) => {
                if (submissions.id === updateSumission.id) {
                    return updateSumission
                }
                return submissions;
            })
            return {
                submission: updateSumissions
            }
        default:
            return state
    }
}