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
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await window.axios.delete(
                        `/api/files/${payload}`
                    );

                    if (response.data.success) {
                        dispatch({
                            type: types.deleteFile,
                            payload,
                        });
                    }

                    Swal.fire(
                        response.data.msg,
                        "",
                        response.data.success ? "success" : "error"
                    );
                } catch (error) {
                    Swal.fire("Ha occurido un error!", "Codigo #5001", "error");
                }
            }
        });
    };

    const changePage = async ({ label, active }) => {
        // console.log(label, active);

        try {
            const response = await window.axios.get(
                `/api/files?page=${Number(label)}`
            );

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
                currentFile: state.currentFile,
                showForm: state.showForm,
                types: state.types,
                attributeInputs: state.attributeInputs,
                onClickFileHandler,
                onChangeType,
                onClickDelete,
                changePage,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default FileState;
