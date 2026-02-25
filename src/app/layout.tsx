import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chaitanya Kore | Senior SEO & AI Search Professional',
  description: '8+ years of experience driving organic growth for global brands through Technical SEO and AI Search (GEO/AEO) strategies.',
  openGraph: {
    title: 'Chaitanya Kore | Senior SEO & AI Search Professional',
    description: 'Expert in Technical SEO, Growth Strategy, and AI Search Optimization (GEO). Driving discoverability for global eCommerce and SaaS brands.',
    url: 'https://portfolio-scrollytelling.vercel.app', // Placeholder, user will update if needed
    siteName: 'Chaitanya Kore Portfolio',
    images: [
      {
        url: '/sequence/frame_00_delay-0.066s.png', // Using the first frame of the sequence as a preview
        width: 1200,
        height: 630,
        alt: 'Chaitanya Kore Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaitanya Kore | Senior SEO & AI Search Professional',
    description: 'AI Search Expert (GEO/AEO) and Technical SEO Specialist driving organic growth.',
    images: ['/sequence/frame_00_delay-0.066s.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PBMXV5F7');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} bg-[#121212] text-white antialiased overflow-x-hidden`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBMXV5F7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
