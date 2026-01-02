import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

function ExperienceCards({ imgPath, title, bullets, alt }) {
  return (
    <Card className="project-card-view">
      <CardMedia component="img" height="220" image={imgPath} alt={alt || "Experience logo"} className="project-card-img" />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {bullets.map((bullet) => (
            <Typography key={bullet} variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {bullet}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
export default ExperienceCards;
