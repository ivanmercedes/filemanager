import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TableRowLoading = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title d-flex justify-content-between mb-3">
                    <span style={{ width: 180 }}>
                        <Skeleton style={{ height: 30 }} count={1} />
                    </span>
                    <span style={{ width: 180 }}>
                        <Skeleton style={{ height: 30 }} count={1} />
                    </span>
                </h4>
                <div className="table-responsive">
                    <table className="table mb-0">
                        <thead></thead>
                        <tbody>
                            {Array.from(Array(20).keys()).map((element) => (
                                <tr key={`loading_tr_${element}`}>
                                    <td>
                                        <Skeleton count={1} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableRowLoading;
