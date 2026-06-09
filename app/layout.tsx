import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const premiumFaviconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128' width='128' height='128'%3E%3Ccircle cx='64' cy='64' r='62' fill='%23FFFFFF'/%3E%3Ccircle cx='64' cy='64' r='54' fill='%230F4C81'/%3E%3Cpath d='M64 34C64 18 84 18 84 34C84 46 95 50 95 70C95 86 84 93 81 93C78 93 76.5 81 75 81C73.5 81 72 93 69 93C66 93 55 86 55 70C55 50 64 46 64 34Z' fill='%23FFFFFF' stroke='%23FAB012' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M42 32L44 38L50 40L44 42L42 48L40 42L34 40L40 38Z' fill='%23FAB012'/%3E%3Cpath d='M96 82L97.5 86L102 87.5L97.5 89L96 93.5L94.5 89L90 87.5L94.5 86Z' fill='%23FAB012'/%3E%3C/svg%3E`;

export const metadata: Metadata = {
  title: 'Dra. Gabriela Pereira Coen | Especialista en Endodoncia Chinandega',
  description: 'Clínica dental de alta especialidad en Chinandega, Nicaragua. Tratamientos de conductos (endodoncia), odontología estética y cuidado general con la Dra. Gabriela Pereira Coen.',
  metadataBase: new URL('https://clinica-dental-dra-pereira-coen.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dra. Gabriela Pereira Coen | Especialista en Endodoncia Chinandega',
    description: 'Tratamientos de conductos avanzados y odontología integral en Chinandega, Nicaragua.',
    url: 'https://clinica-dental-dra-pereira-coen.netlify.app/',
    siteName: 'Dra. Gabriela Pereira Coen',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Clínica Dental Especializada Dra. Gabriela Pereira Coen',
      },
    ],
    locale: 'es_NI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Gabriela Pereira Coen | Especialista en Endodoncia Chinandega',
    description: 'Tratamientos de conductos avanzados y odontología integral en Chinandega, Nicaragua.',
    images: ['https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&h=630&fit=crop'],
  },
  icons: {
    icon: premiumFaviconSvg,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
