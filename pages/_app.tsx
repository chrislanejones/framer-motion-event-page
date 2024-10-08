import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      id="root"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Component {...pageProps} />
    </div>
  );
}


<div class="mb-6 font-extralight">
  <!-- Your content here -->
</div>
