import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

/**
 * Loads the Google tag (gtag.js) once for the App Router.
 * Initial page_view is sent by gtag('config').
 * Client navigations are handled in AnalyticsBootstrap via trackPageView.
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
