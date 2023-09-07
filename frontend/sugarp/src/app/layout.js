"use client";

import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import { store } from "@/store/store";
import { Menu } from "@/sugarp/components/Menu";
import { usePathname } from "next/navigation";
import ThemeRegistry from "../../theme/ThemeRegistry";
import Box from "@mui/material/Box";
import ProvidersNextAuth from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>
          <ProvidersNextAuth>
            <ThemeRegistry>
              <Box
                component='main'
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.default",
                  ml: "65px",
                  mt: ["48px", "56px", "64px"],
                  p: 3,
                }}
              >
                {pathname === "/api/auth/signin" ? <div></div> : <Menu />}
                {children}
              </Box>
            </ThemeRegistry>
          </ProvidersNextAuth>
        </Provider>
      </body>
    </html>
  );
}
