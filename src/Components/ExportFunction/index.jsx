
import { saveAs } from 'file-saver';
import stringify from 'csv-stringify';

function exportToCSV(data, fileName) {
  // Chuyển đổi dữ liệu thành định dạng CSV
  stringify(data, { header: true }, function (err, output) {
    if (err) {
      console.error(err);
      return;
    }

    // Tạo một blob từ chuỗi định dạng CSV
    const blob = new Blob([output], { type: 'text/csv;charset=utf-8' });

    // Sử dụng thư viện file-saver để tải xuống file CSV
    saveAs(blob, `${fileName}.csv`);
  });
}

export default exportToCSV
