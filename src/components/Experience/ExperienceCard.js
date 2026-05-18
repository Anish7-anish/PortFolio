import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function ExperienceCards({ imgPath, role, company, dates, bullets, alt, accent }) {
  return (
    <Card
      className="project-card-view"
      sx={{
        overflow: "hidden",
        borderTop: accent ? `4px solid ${accent}` : undefined,
      }}
    >
      {imgPath && (
        <Box className="experience-card-media">
          <Box
            component="img"
            src={imgPath}
            alt={alt || "Experience logo"}
            className="experience-card-img"
          />
        </Box>
      )}
      <CardContent sx={{ px: 3, py: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {role}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", mb: 2, pb: 1.5, borderBottom: "1px solid", borderColor: "divider" }}
        >
          {company} • {dates}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {bullets.map((bullet, index) => (
            <Box key={`${company}-${index}`} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  mt: "10px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: accent || "currentColor",
                }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                {bullet}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
export default ExperienceCards;
