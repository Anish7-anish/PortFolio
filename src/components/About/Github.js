import React from "react";
import { Box, Typography } from "@mui/material";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pb: 2 }}>
      <Typography variant="h4" className="project-heading" sx={{ pb: 2 }}>
        Days I <span className="purple">Code</span>
      </Typography>
      <GitHubCalendar
        username="Anish7-anish"
        blockSize={15}
        blockMargin={5}
        color="#0b0b0b"
        fontSize={16}
      />
    </Box>
  );
}

export default Github;
