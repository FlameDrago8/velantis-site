import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

/* Plex Mono carries the telemetry labels — engineered, not the system default. */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Velantis",
    template: "%s — Velantis",
  },
  description:
    "Building AI-native products, starting with how people learn to drive.",
};

export const viewport: Viewport = {
  themeColor: "#10131A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${instrumentSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full font-body">{children}</body>
    </html>
  );
}
