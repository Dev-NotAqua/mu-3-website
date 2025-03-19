import { Metadata } from 'next';
import Providers from './Providers';
import { ThemeProvider } from './ThemeProvider';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mu-3',
  description: 'Welcome to Mu-3, your global security partner.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white">
        <Providers>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
