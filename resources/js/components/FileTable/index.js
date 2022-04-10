import { useContext } from "react";
import AppContext from "./context/context";
import Tr from "./Tr";

const DataTable = ({ col }) => {
    const appContext = useContext(AppContext);
    const { files } = appContext;

    if (!files) return null;

    const headings = [
        "Nombre",
        "Estado",
        "Creado por",
        "Agregado",
        "Actualizado",
        "Acciones",
    ];

    return (
        <div className={col}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-between mb-3">
                        <span>Lista de archivos</span>
                        <button className="btn btn-primary">
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
                                    <Tr key={data.id} item={data} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
