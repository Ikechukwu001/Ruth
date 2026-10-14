
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "@RuthieDoraWellness | Wellness & Massage",
  description:
    "Discover a calming wellness experience with Ruthie Dora Wellness. Relax, restore, and make time for yourself.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${nunitoSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Script id="tawk-to" strategy="afterInteractive">
  {`
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6acf4a4bc8d9e734cf4cc1a2/1k4srkf4q';
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  `}
</Script>
<Script id="tawk-position" strategy="afterInteractive">
  {`
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function () {
      window.Tawk_API.setAttributes({}, function () {});
    };
  `}
</Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
