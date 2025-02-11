import type { Metadata } from "next";
import { DM_Sans, Inter, Manrope} from "next/font/google";
import "../styles/index.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Undress ai is your new assistant in the undress with ai sphere.",
  description: " Undress ai helps you undress anyone in seconds! Try to make your life brighter and your photos more beautiful with undress me ai. Dive into the world of beauty and create ai undress masterpieces.",
  icons: [{rel: 'icon', url: '/favicon.png'}],
  alternates: {
    canonical: 'https://undressapp.pl',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} ${manrope.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
