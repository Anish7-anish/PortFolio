import React from "react";
import { Grid, Box } from "@mui/material";
import { DiPython } from "react-icons/di";
import {
  SiApachespark,
  SiDatabricks,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

const icons = [
  DiPython,
  SiPostgresql,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiApachespark,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiDatabricks,
];

function Techstack() {
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

export default Techstack;
