import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PdfLayout() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <div className="h-auto min-h-svh flex flex-col relative">
        <Header color='black' backgroundColor='white'  barColor="black"/>
        {/* <Header/> */}
        <main className="flex-1">
            <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
      </div>
  );
}

export default PdfLayout;