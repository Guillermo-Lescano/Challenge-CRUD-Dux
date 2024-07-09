import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
          {children}
        <Footer />
      </body>
    </html>
  );
}
