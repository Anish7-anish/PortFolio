import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, alt }) {
  return (
    <Card className="project-card-view">
      {imgPath && (
        <CardMedia
          component="img"
          height="220"
          image={imgPath}
          alt={alt || title}
          className="project-card-img"
        />
      )}
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
          {description}
        </Typography>
      </CardContent>
      {(ghLink || demoLink) && (
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Stack direction="row" spacing={1}>
            {ghLink && (
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            )}
            {demoLink && (
              <Button
                variant="contained"
                startIcon={<OpenInNewIcon />}
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Button>
            )}
          </Stack>
        </CardActions>
      )}
    </Card>
  );
}
export default ProjectCards;
