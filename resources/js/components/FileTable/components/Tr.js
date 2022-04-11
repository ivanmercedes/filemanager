import useFormatDate from "../../../hooks/useFormatDate";

const Tr = ({ item, onClickFileHandler, onClickDelete }) => {
    return (
        <tr key={"tr_file_" + item.id}>
            <td>{item.name}</td>
            <td className="text-bold-500">{item.status}</td>
            <td>{item.user.name}</td>
            <td>{useFormatDate(item.created_at)}</td>
            <td>{useFormatDate(item.updated_at)}</td>
            <td className="d-flex flex-column">
                <button
                    className="btn btn-primary mb-2 btn-sm"
                    onClick={() => onClickFileHandler(item)}
                >
                    editar
                </button>
                <button
                    onClick={() => onClickDelete(item.id)}
                    className="btn btn-danger mb-2 btn-sm"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Tr;
