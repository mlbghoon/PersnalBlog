import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

export const Grid = () => {
    const [rowData, setRowData] = useState([{ top: 0, left : 0, right : 0, bottom : 0}]); 	

    return (
        <AgGridReact rowData={rowData} />
    )
}