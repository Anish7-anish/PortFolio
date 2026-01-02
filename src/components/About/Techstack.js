import React from "react";
import { Grid, Box } from "@mui/material";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiSpringboot,
  SiTensorflow,
  SiRubyonrails,
  SiKeras,
  SiGraphql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const icons = [
  DiPython,
  DiJavascript1,
  TbBrandGolang,
  DiNodejs,
  DiReact,
  SiMysql,
  DiMongodb,
  SiSpringboot,
  DiGit,
  SiTensorflow,
  SiRubyonrails,
  SiKeras,
  SiGraphql,
  DiJava,
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
