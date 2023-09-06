"use client";
import { SessionProvider } from "next-auth/react";

export default function ProvidersNextAuth({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
