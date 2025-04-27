import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PdfViewer({ fileUrl }) {
  return (
    <div className="h-screen">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
}
