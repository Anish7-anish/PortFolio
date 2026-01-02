import React, { useState, useEffect } from "react";
import { Container, Box, Button, Stack } from "@mui/material";
import Particle from "../Particle";
import pdf from "../../Assets/Anish_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box className="resume-section">
      <Particle />
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={2} sx={{ pt: 4 }}>
          <Button
            variant="outlined"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<AiOutlineDownload />}
            sx={{ maxWidth: 250 }}
          >
            Download CV
          </Button>
          <Box className="resume">
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.65} />
            </Document>
          </Box>
          <Button
            variant="contained"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<AiOutlineDownload />}
            sx={{ maxWidth: 250 }}
          >
            Download CV
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default ResumeNew;
