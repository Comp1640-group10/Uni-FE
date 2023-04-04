// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "REMOVE_SUBMISSION":
            return {
                submission: state.submission.filter(submission => {
                    return submission.id !== action.payload
                })
            }
        case "ADD_SUBMISSION":
            return {
                submission: [action.payload, ...state.submission]
            }
        default:
            return state
    }
}