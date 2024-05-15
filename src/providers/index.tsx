"use client";

import type { ReactNode } from "react";
import AuthProvider from "./auth";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      {children}
      <Toaster closeButton={true} duration={2500} />
    </AuthProvider>
  );
}
