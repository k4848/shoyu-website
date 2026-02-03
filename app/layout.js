import '@/app/globals.css';

export const metadata = {
  title: '伝統醤油 - Traditional Shoyu',
  description: '1896年創業。130年続く伝統の醤油づくり',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
