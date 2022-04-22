import { useContext } from "react";
import AppContext from "../context/context";
import Paginator from "./Paginator";
import Tr from "./Tr";

import TableRowLoading from "../../Loading/TableRowLoading";

const headings = [
    "Nombre",
    // "Estado",
    // "Creado por",
    "Agregado",
    "Actualizado",
    "Acciones",
];

const Table = () => {
    const appContext = useContext(AppContext);
    const { files, onClickFileHandler, onClickDelete } = appContext;

    if (!files) return <TableRowLoading />;

    if (Object.keys(files).length < 0)
        return <h1>No hay archivos disponible...</h1>;
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
                    <Paginator />
                </div>
            </div>
        </div>
    );
};

export default Table;
