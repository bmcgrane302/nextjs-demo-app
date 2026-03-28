"use client";

import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Button, Box, IconButton, CssBaseline } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: { main: "#ffffff" },
//     background: {
//       default: "#0d0d0d",
//       paper: "#1c1c1c",
//     },
//   },
// });

// MUI light theme with accessible contrast and adjusted AppBar
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0d47a1" },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#0b1a2b",
      secondary: "#4a5568",
    },
    action: {
      hover: "rgba(13, 71, 161, 0.08)",
      selected: "rgba(13, 71, 161, 0.16)",
    },
  },
  typography: {
    fontSize: 16,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: "#ffffff",
          color: "#0b1a2b",
        },
      },
      defaultProps: {
        elevation: 1,
      },
    },
  },
});

// Dark theme with accessible contrast and adjusted AppBar
// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: { main: "#ffffff" },
//     background: {
//       default: "#121212",
//       paper: "#1e1e1e",
//     },
//     text: {
//       primary: "#ffffff",
//       secondary: "#b0b0b0",
//     },
//     action: {
//       hover: "rgba(255, 255, 255, 0.1)",
//       selected: "rgba(255, 255, 255, 0.2)",
//     },
//   },
//   typography: {
//     fontSize: 16,
//     button: {
//       textTransform: "none",
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           padding: "8px 16px",
//         },
//       },
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         colorInherit: {
//           backgroundColor: "#1e1e1e",
//         },
//       },
//     },
//   },
// });

export default function ClientLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasFlag = document.cookie.split("; ").some((c) => c.trim().startsWith("logged_in="));
    setIsLoggedIn(hasFlag);
  }, []);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    setIsLoggedIn(false);
    window.location.href = "/login";
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="inherit" elevation={2}>
        <Toolbar>
          <IconButton
            component={Link}
            href="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout} sx={{ textTransform: "none" }}>
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              href="/login"
              sx={{ textTransform: "none" }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 2 }}>
        {children}
      </Box>
    </ThemeProvider>
  );
}
