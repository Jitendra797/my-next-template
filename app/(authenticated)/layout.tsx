import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { appData } from "@/lib/applicationData";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export const metadata: Metadata = {
  title: appData.app_name,
  description: appData.app_description,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AdminPanelLayout>{children}</AdminPanelLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
