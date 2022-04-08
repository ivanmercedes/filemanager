import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Enero",
        Archivos: 4000,
    },
    {
        name: "Febrero",
        Archivos: 3000,
    },
    {
        name: "Marzo",
        Archivos: 2000,
    },
    {
        name: "Abril",
        Archivos: 2780,
    },
    {
        name: "Mayo",
        Archivos: 1890,
    },
    {
        name: "Junio",
        Archivos: 2390,
    },
    {
        name: "Julio",
        Archivos: 3490,
    },
];

const AreaChartC = () => {
    return (
        <div className="card" style={{ height: 400 }}>
            <div className="card-header">
                <h4>Descargas</h4>
            </div>
            <div className="card-body position-relative">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="Archivos"
                            stroke="#435ebe"
                            fill="#435ebe"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaChartC;
