import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

function ExperienceCards({ imgPath, role, company, dates, bullets, alt }) {
  return (
    <Card className="project-card-view">
      <CardMedia
        component="img"
        height="220"
        image={imgPath}
        alt={alt || "Experience logo"}
        className="experience-card-img"
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {role}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1.5 }}>
          {company} • {dates}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {bullets.map((bullet, index) => (
            <Typography key={`${company}-${index}`} variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {bullet}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
export default ExperienceCards;
