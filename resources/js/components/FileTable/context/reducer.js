import types from "./types";

export default (state, action) => {
    switch (action.type) {
        case types.fetchFile:
            return {
                ...state,
                files: action.payload,
            };
        default:
            return state;
    }
};
