import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [
    { lang: 'ja' },
    { lang: 'en' },
    { lang: 'ko' },
  ];
}

export default function LangLayout({ children, params }) {
  const { lang } = params;

  return (
    <>
      <Header lang={lang} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
}
