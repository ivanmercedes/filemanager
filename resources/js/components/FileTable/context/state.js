import { useReducer, useEffect } from "react";
import Swal from "sweetalert2";

import AppContext from "./context";
import appReducer from "./reducer";

import types from "./types";

const FileState = ({ children }) => {
    const initialState = {
        files: null,
        currentFile: null,
        showForm: false,
        types: null,
        attributeInputs: null,
        showAlert: false,
    };

    const [state, dispatch] = useReducer(appReducer, initialState);

    const setInitialState = async () => {
        try {
            const response = await window.axios.get("/api/files");
            const responseTypes = await window.axios.get("/api/types");

            dispatch({
                type: types.fetchFile,
                payload: response.data,
            });

            dispatch({
                type: types.fetchTypes,
                payload: responseTypes.data,
            });
        } catch (error) {
            console.log("Files: ", error);
        }
    };

    const onChangeType = (id) => {
        dispatch({
            type: types.setAttributeInputs,
            payload: id,
        });
    };

    const onClickFileHandler = (payload = null) => {
        dispatch({
            type: types.showForm,
            payload,
        });
    };

    const onClickDelete = (payload) => {
        Swal.fire({
            title: "Deseas eliminar este archivo?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#435ebe",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                // TODO
                dispatch({
                    type: types.deleteFile,
                    payload,
                });
                Swal.fire("Archivo eliminado!", "", "success");
            }
        });
    };
    useEffect(() => {
        setInitialState();
    }, []);

    return (
        <AppContext.Provider
            value={{
                files: state.files,
                currentFile: state.currentFile,
                showForm: state.showForm,
                types: state.types,
                attributeInputs: state.attributeInputs,
                onClickFileHandler,
                onChangeType,
                onClickDelete,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default FileState;
