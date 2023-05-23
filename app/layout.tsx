import './globals.css';
import { Inter } from 'next/font/google';
import { classNames } from './utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mainline Community Engine',
  description: 'mce.vercel.app',
};

interface Props {
  children: React.ReactNode,
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className={classNames(inter.className, 'h-full')}>
        {children}
      </body>
    </html>
  );
}
