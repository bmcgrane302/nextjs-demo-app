// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// import Link from "next/link";

// export default function Home() {
//   const styles = {
//     container: { textAlign: "center", marginTop: "100px" },
//     link: { display: "block", margin: "10px", color: "#0070f3", textDecoration: "underline" },
//   };

//   return (
//     <main style={styles.container}>
//       <h1>Home Page</h1>
//       <p>Welcome to my simple Next.js app.</p>

//       {/* <Link href="/todo" style={styles.link}>
//         Go to To-Do Page
//       </Link>

//       <Link href="/slideshow" style={styles.link}>
//         Go to Slideshow Page
//       </Link> */}
//     </main>
//   );
// }


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
        <Button variant="contained" component={Link} href="/login">
          Login
        </Button>
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
