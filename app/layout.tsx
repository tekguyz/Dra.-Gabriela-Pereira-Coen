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

const smileSvg = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMEY0QzgxIiBzdHJva2Utd2lkdGg9IjgiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjQwIiByPSI2IiBmaWxsPSIjMEY0QzgxIi8+PGNpcmNsZSBjeD0iNjUiIGN5PSI0MCIgcj0iNiIgZmlsbD0iIzBGNEM4MSIvPjxwYXRoIGQ9Ik0gMzAgNjUgUSA1MCA4NSA3MCA2NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMEY0QzgxIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==`;

export const metadata: Metadata = {
  title: 'Clínica Dental Dra. Gabriela Pereira Coen',
  description: 'Smiles Crafted with Real Care & Precision in Chinandega, Nicaragua.',
  icons: {
    icon: smileSvg,
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
