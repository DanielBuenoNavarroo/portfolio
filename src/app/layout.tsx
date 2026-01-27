import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Daniel Bueno Navarro - Portfolio",
  description:
    "Im a frontend - backend developer, living in Madrid (Es). This porfolio is made for share my projects with everyone.",
  icons: ["/assets/code-icon-dark.png"],
  keywords: [
    "Porfolio",
    "daniel bueno navarro",
    "curriculum vitae",
    "cv",
    "web development",
  ],
  authors: [{ name: "Daniel Bueno Navarro" }],
  creator: "Daniel Bueno Navarro",
  publisher: "Daniel Bueno Navarro",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
