import React from "react";
import ReactDOM from "react-dom";
import { AreaChartC } from "./Charts";

if (document.getElementById("download-chart")) {
    ReactDOM.render(<AreaChartC />, document.getElementById("download-chart"));
}
