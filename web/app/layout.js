import "./globals.css"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import config from "@/config"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || config.app.defaultUrl
  ),
  title: {
    default: config.app.seoTitle || config.app.name,
    template: `%s · ${config.app.name}`,
  },
  description: config.app.description,
  keywords: [
    "consultoría ambiental",
    "seguridad industrial",
    "cumplimiento ambiental",
    "auditoría ambiental",
    "auditoría de seguridad industrial",
    "diagnóstico de cumplimiento",
    "capacitación empresarial",
    "NOM-STPS",
    "gestión ambiental",
    "trámites ambientales",
    "seguridad e higiene industrial",
  ],
  openGraph: {
    title: config.app.seoTitle || config.app.name,
    description: config.app.description,
    type: "website",
    locale: config.app.locale === "es" ? "es_MX" : "en_US",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
}

export const viewport = {
  themeColor: config.brand.primary,
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html
      lang={config.app.locale}
      data-theme="vibecoding"
      suppressHydrationWarning
      className={montserrat.variable}
      style={{
        "--color-primary": config.brand.primary,
        "--color-accent": config.brand.accent || "#82C033",
      }}
    >
      <body className="bg-base-100 text-base-content">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='vibecoding'||t==='vibecoding-dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}`,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
