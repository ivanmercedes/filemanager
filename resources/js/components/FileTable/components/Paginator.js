import { useContext, useEffect } from "react";
import AppContext from "../context/context";

const Paginator = () => {
    const appContext = useContext(AppContext);
    const {
        changePage,
        files: { links },
        ...files
    } = appContext;

    useEffect(() => {}, [files]);
    return (
        <nav className="mt-4">
            <ul className="pagination">
                {links.map((link) => (
                    <li
                        key={link.label}
                        className={`page-item ${link.active ? "active " : ""}`}
                    >
                        <button
                            type="button"
                            onClick={() => changePage(link)}
                            className={`page-link`}
                        >
                            {link.label
                                .replace("&laquo;", "< ")
                                .replace("&raquo;", " >")}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Paginator;
