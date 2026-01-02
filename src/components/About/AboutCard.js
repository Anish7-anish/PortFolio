import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function AboutCard() {
  return (
    <Card className="quote-card-view" sx={{ backgroundColor: "#ffffff", borderRadius: 3 }}>
      <CardContent>
        <Typography variant="body1" sx={{ lineHeight: 1.9, color: "text.secondary" }}>
          Hi Everyone, I am <span className="purple">Anish Rao Toorpu</span> from
          <span className="purple"> Hyderabad, India.</span>
          <br />
          I am currently working as a Graduate Student Assistant at CALS AP NCSU.
          <br />
          I am currently pursuing my Masters in Computer Science at North Carolina State University.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </Typography>

        <Box sx={{ mt: 2, display: "grid", gap: 1 }}>
          {[
            "Playing Valorant",
            "Playing Cricket",
            "Watching Movies",
          ].map((activity) => (
            <Box key={activity} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ChevronRightIcon fontSize="small" />
              <Typography variant="body2">{activity}</Typography>
            </Box>
          ))}
        </Box>

        <Typography variant="subtitle2" sx={{ mt: 3, color: "text.secondary" }}>
          "I have always believed that process is more important than results."
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          Ms Dhoni
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
