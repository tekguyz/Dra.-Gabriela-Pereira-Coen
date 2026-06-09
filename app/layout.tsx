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

const premiumFaviconSvg = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0iIzBBMjU0MCIvPjxwYXRoIGQ9Ik02NCAzMEM2NCAxMiw4OCAxMiw4OCAzMEM4OCA0MiwxMDIgNDgsMTAyIDY5QzEwMiA5MCw4OCA5OSw4NCA5OUM4MCA5OSw3OCA4NCw3NiA4NEM3NCA4NCw3MiA5OSw2OCA5OUM2NCA5OSw1MCA5MCw1MCA2OUM1MCA0OCw2NCA0Miw2NCAzMFoiIHN0cm9rZT0iI0ZBQjAxMiIgc3Ryb2tlLXdpZHRoPSI2IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNzIgMzhDNzIgMjYsODIgMjYsODIgMzgiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNOTAgMjhMOTIgMzRMMTkyIDM2TDkyIDM4TDkwIDQ0TDg4IDM4TDgyIDM2TDg4IDM0WiIgZmlsbD0iI0ZBQjAxMiIvPjwvc3ZnPg==`;

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
