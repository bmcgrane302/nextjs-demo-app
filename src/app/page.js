"use client";
import { Button, Typography, Stack } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Next.js App
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Please log in to access your To-Do list and Slideshow.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="outlined" component={Link} href="/todo">
          Go to To-Do
        </Button>
        <Button variant="outlined" component={Link} href="/slideshow">
          Go to Slideshow
        </Button>
      </Stack>
    </Stack>
  );
}
