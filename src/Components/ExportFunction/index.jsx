import React from "react";
import { stringify } from "csv";

function CSVExportButton({ data, fileName }) {
  const handleDownload = () => {
    const headers = Object.keys(data[0]);
    const csvData = stringify(data, { header: true });
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return <button onClick={handleDownload}>Export to CSV</button>;
}

export default CSVExportButton;
