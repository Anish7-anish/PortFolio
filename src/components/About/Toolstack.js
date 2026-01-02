import React from "react";
import { Grid, Box } from "@mui/material";
import {
  SiVisualstudiocode,
  SiVercel,
  SiMacos,
  SiIntellijidea,
  SiAmazonaws,
} from "react-icons/si";

const icons = [SiMacos, SiVisualstudiocode, SiAmazonaws, SiIntellijidea, SiVercel];

function Toolstack() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ py: 4 }}>
      {icons.map((IconComponent, index) => (
        <Grid key={index} item xs={4} sm={3} md={2}>
          <Box className="tech-icons">
            <IconComponent />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Toolstack;
