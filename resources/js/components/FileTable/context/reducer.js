import types from "./types";

export default (state, action) => {
    switch (action.type) {
        case types.fetchFile:
            return {
                ...state,
                files: action.payload,
            };
        case types.fetchTypes:
            return {
                ...state,
                types: action.payload,
            };
        case types.showForm:
            return {
                ...state,
                showForm: !state.showForm,
                currentFile: action.payload,
                attributeInputs: action.payload
                    ? state.types.filter(
                          (type) => type.id === Number(action.payload.type_id)
                      )
                    : null,
            };
        case types.setAttributeInputs:
            return {
                ...state,
                attributeInputs: state.types.filter(
                    (type) => type.id === Number(action.payload)
                ),
            };
        case types.updateFile:
            return {
                ...state,
                showForm: true,
                currentFile: action.payload,
            };

        case types.deleteFile:
            return {
                ...state,
                files: {
                    ...state.files,
                    data: state.files.data.filter(
                        (file) => file.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};
