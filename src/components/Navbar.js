import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../ColorModeContext";
import atlogo from "../Assets/DT_logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/project" },
  { label: "Resume", to: "/resume" },
  { label: "Experience", to: "/experience" },
];

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDark = theme.palette.mode === "dark";

  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: "space-between" }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              gap: 1.2,
            }}
          >
            <Box
              component="img"
              src={atlogo}
              alt="Anish logo"
              sx={{ height: 32, width: 56, objectFit: "contain" }}
            />
            <Typography variant="subtitle1" sx={{ fontWeight: 700, letterSpacing: "0.04em" }}>
              ANISH
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={RouterLink}
                to={link.to}
                color="inherit"
                sx={{
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  paddingX: 2,
                  borderRadius: 999,
                  transition: "all 200ms ease",
                  "&:hover": {
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <IconButton
              onClick={colorMode.toggleColorMode}
              aria-label="Toggle dark mode"
              sx={{
                border: isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            >
              {isDark ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/Anish7-anish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              sx={{
                border: isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: "50%",
                width: 40,
                height: 40,
                transition: "all 200ms ease",
                "&:hover": {
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Box>

          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, padding: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, letterSpacing: "0.2em" }}>
            MENU
          </Typography>
          <List>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.to}
                component={RouterLink}
                to={link.to}
                onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <Button
            onClick={colorMode.toggleColorMode}
            variant="outlined"
            fullWidth
            startIcon={isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            sx={{ mt: 2 }}
          >
            {isDark ? "Light mode" : "Dark mode"}
          </Button>
          <Button
            href="https://github.com/Anish7-anish"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            fullWidth
            startIcon={<GitHubIcon />}
            sx={{ mt: 2 }}
          >
            GitHub
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
