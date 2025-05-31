import './globals.css';
import { ReduxProvider } from '@/store/Providers';

export const metadata = {
  title: 'My App',
  description: 'Using Redux in Next.js 15',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
