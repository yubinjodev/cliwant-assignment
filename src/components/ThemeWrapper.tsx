"use client";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
