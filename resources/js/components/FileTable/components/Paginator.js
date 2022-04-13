import { useContext, useEffect } from "react";
import useId from "../../../hooks/useId";
import AppContext from "../context/context";

const Paginator = () => {
    const appContext = useContext(AppContext);
    const {
        changePage,
        files: { links },
        ...files
    } = appContext;

    useEffect(() => {}, [files]);

    const { 0: previousPage, [links.length - 1]: nextPage, ...rest } = links;

    return (
        <nav className="mt-4">
            <ul className="pagination">
                {previousPage.url ? (
                    <li className={`page-item`}>
                        <button
                            type="button"
                            onClick={() =>
                                changePage(previousPage.url.split("=")[1])
                            }
                            className={`page-link`}
                        >
                            {previousPage.label.replace("&laquo;", "< ")}
                        </button>
                    </li>
                ) : null}
                {Object.values(rest).map((link) => (
                    <li
                        key={useId()}
                        className={`page-item ${link.active ? "active " : ""}`}
                    >
                        <button
                            type="button"
                            onClick={() => changePage(link.label)}
                            className={`page-link`}
                        >
                            {link.label}
                        </button>
                    </li>
                ))}

                {nextPage.url && (
                    <li className={`page-item`}>
                        <button
                            type="button"
                            onClick={() =>
                                changePage(nextPage.url.split("=")[1])
                            }
                            className={`page-link`}
                        >
                            {nextPage.label.replace("&raquo;", " >")}
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Paginator;
