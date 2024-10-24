import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
// import { Poppins } from "next/font/google";
import GlobalLayout from "./globalLayout";

export const metadata = {
  title: "Frontend test",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// const poppins = Poppins({
//   weight: ["300", "400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   display: "swap",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${GeistSans.variable}`}>
      <body>
        <div>
          <GlobalLayout>{children}</GlobalLayout>
          <div id='custom-drawer' />
          <div id='custom-modal' />
        </div>
      </body>
    </html>
  );
}
