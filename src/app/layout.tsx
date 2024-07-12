"use client";
// components/RootLayout.tsx (o el nombre que prefieras)
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Navigation from "@/components/Navigation";

import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Navigation />
          {children}
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
