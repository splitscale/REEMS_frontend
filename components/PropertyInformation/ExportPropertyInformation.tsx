import React from 'react';
import { saveAs } from 'file-saver';

function ExportPropertyInformation() {
  const handleDownload = () => {
    const byteArray = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
    const fileData = new Uint8Array(byteArray);

    const blob = new Blob([fileData]);
    saveAs(blob, 'file.txt');
  };

  return (
    <button className="border rounded p-2 bi bi-download bg-white" onClick={handleDownload}> Export </button>
  );
}

export default ExportPropertyInformation;
