import useFormatDate from "../../hooks/useFormatDate";

const Tr = ({ item }) => {
    return (
        <tr key={item.id}>
            {/* <td className="text-bold-500">{item.order}</td> */}
            <td>{item.name}</td>
            <td className="text-bold-500">{item.status}</td>
            <td>{item.user.name}</td>
            <td>{useFormatDate(item.created_at)}</td>
            <td>{useFormatDate(item.updated_at)}</td>
            <td className="d-flex flex-column">
                <div className="btn btn-info mb-2 btn-sm">Ver</div>
                <div className="btn btn-primary mb-2 btn-sm">editar</div>
                <div className="btn btn-danger mb-2 btn-sm">Eliminar</div>
            </td>
        </tr>
    );
};

export default Tr;
