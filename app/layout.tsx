import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevHive Solutions | Building the Future of Digital Experiences",
  description: "DevHive Solutions is a software development company that builds web applications, mobile apps, and custom software using the latest technologies.",
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "DevHive Solutions | Digital Excellence",
    description: "Building high-performance web and mobile applications using modern tech stacks.",
    images: [
      {
        url: "/3.png",
        width: 1200,
        height: 630,
        alt: "DevHive Solutions Logo",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHive Solutions",
    description: "Building the Future of Digital Experiences.",
    images: ["/3.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} min-h-full antialiased`}>
      <body className="flex flex-col min-h-screen bg-[#0C0F14] text-white overflow-x-hidden">
        {/* Global Dark Hex Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI2OS4yODIiIHZpZXdCb3g9IjAgMCA0MCA2OS4yODIiPjxwYXRoIGQ9Ik00MCAxNy4zMmwtMjAgMTEuNTQ3TDAgMTcuMzJWLTUuNzc0bDIwLTExLjU0OCAyMCAxMS41NDhWMTcuMzJ6bTAgNDYuMTg4bC0yMCAxMS41NDgtMjAtMTEuNTQ4VjQwLjQxNEwyMCAyOC44NjdsMjAgMTEuNTQ3djIzLjA5NHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_20%,transparent_100%)]"></div>
          {/* Global Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D19C5B]/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#131821]/10 rounded-full blur-[150px]"></div>
        </div>
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
