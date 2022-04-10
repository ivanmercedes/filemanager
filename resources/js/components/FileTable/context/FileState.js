import { useReducer, useEffect } from "react";
import AppContext from "./context";
import appReducer from "./reducer";
import types from "./types";

const FileState = ({ children }) => {
    const initialState = {
        files: null,
        currentEditFile: null,
        addNewFile: null,
    };

    const [state, dispatch] = useReducer(appReducer, initialState);

    const setInitialState = async () => {
        try {
            const response = await window.axios.get("/api/files");

            dispatch({
                type: types.fetchFile,
                payload: response.data,
            });
        } catch (error) {
            console.log("Files: ", error);
        }
    };

    useEffect(() => {
        setInitialState();
    }, []);

    return (
        <AppContext.Provider
            value={{
                files: state.files,
                currentEditFile: state.currentEditFile,
                addNewFile: state.addNewFile,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default FileState;
