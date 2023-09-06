"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "@/store/store";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "../../theme/ThemeRegistry";
import { Menu } from "@/sugarp/components/Menu";
import ProvidersNextAuth from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ProvidersNextAuth>
          <Provider store={store}>
            <ThemeRegistry>
              <Menu />
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
                {children}
              </Box>
            </ThemeRegistry>
          </Provider>
        </ProvidersNextAuth>
      </body>
    </html>
  );
}
