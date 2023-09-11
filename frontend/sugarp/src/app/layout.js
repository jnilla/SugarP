"use client";

import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import { store } from "@/store/store";
import { Menu } from "@/sugarp/components/Menu";
import ThemeRegistry from "../../theme/ThemeRegistry";
import Box from "@mui/material/Box";
import ProvidersNextAuth from "./Providers";
import "./globals.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({ children }) {
  const url = usePathname();
  const status = localStorage.getItem("status");
  const router = useRouter();

  useEffect(() => {
    if (status === "not-authenticated" || status === null) {
      router.push("/login");
    }
  }, [status]);

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
                {url === "/login" || status != "authenticated" ? "" : <Menu />}
                {children}
              </Box>
            </ThemeRegistry>
          </ProvidersNextAuth>
        </Provider>
      </body>
    </html>
  );
}
