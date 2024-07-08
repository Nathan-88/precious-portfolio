import React from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from '../assets/precious_resume.pdf';

export default function Pdf() {
  return (
    <div className='flex justify-center'>
        <Document file={samplePDF}>
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
    </div>
  );
}