import localFont from "next/font/local";
import "./globals.css";
import 'antd/dist/reset.css'
import Header from "../../components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pokedex",
  description: "Frontend challenge - Pokedex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
