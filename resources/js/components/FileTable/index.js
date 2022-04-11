import { useContext } from "react";
import FormFile from "./components/Form";
import Table from "./components/Table";
import AppContext from "./context/context";

const DataTable = ({ col }) => {
    const appContext = useContext(AppContext);
    const { showForm } = appContext;

    return <div className={col}>{showForm ? <FormFile /> : <Table />}</div>;
};

export default DataTable;
