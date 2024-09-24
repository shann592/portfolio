import { Document, Page, pdfjs } from 'react-pdf'
import resume from '../assets/resume/resume.pdf'
import Pagination from './Pagination'
import { useState } from 'react'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css' // For annotations
import 'react-pdf/dist/esm/Page/TextLayer.css' // For text layers
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()
const ResumeView = () => {
  const [page, setPage] = useState(1)
  const handlePageChange = (num) => {
    setPage(num)
  }
  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 fixed bg-black bg-opacity-50 z-50">
      <Pagination handlePageChange={handlePageChange} />
      <Document
        file={resume}
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true,
          // standardFontDataUrl: 'standard_fonts/',
        }}
      >
        <Page pageNumber={page} />
      </Document>
    </div>
  )
}
export default ResumeView
