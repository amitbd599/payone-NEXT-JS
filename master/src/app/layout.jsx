import InitializeAOS from "@/helper/InitializeAOS";
import PhosphorIconsLoader from "@/helper/PhosphorIconsLoader";
import RouteScrollToTop from "@/helper/RouteScrollToTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/css/modal-video.css";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title:
    "SassTech - Saas Software and IT Solution Multipurpose NEXT JS Template",
  description: "IT Solution, Sass and Multipurpose NEXT JS Template.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className='position-relative'>
        <InitializeAOS />
        <RouteScrollToTop />
        <PhosphorIconsLoader />

        {children}

        <script src='/assets/js/boostrap.bundle.min.js'></script>
      </body>
    </html>
  );
}
