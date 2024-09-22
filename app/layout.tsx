import '@/app/ui/global.css';
import { quicksand } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  );
}
