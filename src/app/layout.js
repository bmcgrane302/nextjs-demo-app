// "use client";

// import { useState, useEffect } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { AppBar, Toolbar, Button, Box, IconButton, CssBaseline } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import Link from "next/link";


// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: { main: "#ffffffff" },
//     background: {
//       default: "#0d0d0d",
//       paper: "#1c1c1c",
//     },
//   },
// });

// export default function RootLayout({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const hasFlag = document.cookie
//       .split("; ")
//       .some((c) => c.trim().startsWith("logged_in="));
//     setIsLoggedIn(hasFlag);
//   }, []);

//   async function handleLogout() {
//     await fetch("/api/logout", { method: "POST" });
//     setIsLoggedIn(false);
//     window.location.href = "/login";
//   }

//   return (
//     <html lang="en">
//       <body style={{ margin: 0 }}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <AppBar position="static" color="inherit" elevation={2}>
//             <Toolbar>
//               <IconButton
//                 component={Link}
//                 href="/"
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="home"
//                 sx={{ mr: 2 }}
//               >
//                 <HomeIcon />
//               </IconButton>

//               <Box sx={{ flexGrow: 1 }} />

//               {isLoggedIn ? (
//                 <Button color="inherit" onClick={handleLogout} sx={{ textTransform: "none" }}>
//                   Logout
//                 </Button>
//               ) : (
//                 <Button
//                   color="inherit"
//                   component={Link}
//                   href="/login"
//                   sx={{ textTransform: "none" }}
//                 >
//                   Login
//                 </Button>
//               )}
//             </Toolbar>
//           </AppBar>

//           <Box component="main" sx={{ p: 2 }}>
//             {children}
//           </Box>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Demo App",
  description: "A simple Next.js app with JWT login and MUI dark theme",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
