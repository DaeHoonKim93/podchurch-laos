import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '2026 POD Church 라오스 아웃리치',
  description: '"너희를 위하여 싸우심이라" 여호수아 23:10',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="mobile-container">
          {children}
        </div>
      </body>
    </html>
  );
}
