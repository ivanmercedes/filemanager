import React from "react";
import ReactDOM from "react-dom";
import { AreaChartC } from "./Charts";
import DataTable from "./FileTable";
import FileState from "./FileTable/context/FileState";

if (document.getElementById("download-chart")) {
    ReactDOM.render(<AreaChartC />, document.getElementById("download-chart"));
}

if (document.getElementById("files")) {
    const file = document.getElementById("files");
    ReactDOM.render(
        <FileState>
            <DataTable col={file.getAttribute("data-col")} />
        </FileState>,
        file
    );
}
