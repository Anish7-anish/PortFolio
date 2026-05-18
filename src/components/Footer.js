import React from "react";
import { Container, Box, Typography, IconButton, Stack } from "@mui/material";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box className="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ textAlign: "center", color: "#ffffff" }}>
            Designed and Developed by Anish Rao Toorpu
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center", color: "#ffffff" }}>
            Copyright © {year} AT
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={1.5}>
            <IconButton
              component="a"
              href="https://github.com/Anish7-anish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ color: "#ffffff" }}
            >
              <AiFillGithub />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/anish-rao-toorpu-a4463821a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ color: "#ffffff" }}
            >
              <FaLinkedinIn />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
