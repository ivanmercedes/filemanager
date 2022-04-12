import { useContext } from "react";
import AppContext from "../context/context";
import Tr from "./Tr";

const headings = [
    "Nombre",
    "Estado",
    "Creado por",
    "Agregado",
    "Actualizado",
    "Acciones",
];

const Table = () => {
    const appContext = useContext(AppContext);
    const { files, onClickFileHandler, onClickDelete } = appContext;

    if (!files) return null;

    if (Object.keys(files).length < 0) return null;
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title d-flex justify-content-between mb-3">
                    <span>Lista de archivos</span>
                    <button
                        className="btn btn-primary"
                        onClick={() => onClickFileHandler()}
                    >
                        Agrega nuevo
                    </button>
                </h4>
                <div className="table-responsive">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr>
                                {headings.map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {files.data.map((data) => (
                                <Tr
                                    key={data.id}
                                    item={data}
                                    onClickFileHandler={onClickFileHandler}
                                    onClickDelete={onClickDelete}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
