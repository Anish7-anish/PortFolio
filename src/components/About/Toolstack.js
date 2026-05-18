import React from "react";
import { Grid, Box } from "@mui/material";
import {
  SiApacheairflow,
  SiDatabricks,
  SiDocker,
  SiGooglecloud,
  SiKubernetes,
  SiMicrosoftazure,
  SiMlflow,
  SiAmazonaws,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

const icons = [
  SiVisualstudiocode,
  DiGit,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiApacheairflow,
  SiMlflow,
  SiDatabricks,
];

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
