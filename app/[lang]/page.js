import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function HomePage({ params }) {
  const { lang } = params;
  const { t } = useTranslation(lang);

  const features = [
    {
      icon: '🏺',
      title: t('home.features.0.title'),
      description: t('home.features.0.description'),
    },
    {
      icon: '🌾',
      title: t('home.features.1.title'),
      description: t('home.features.1.description'),
    },
    {
      icon: '👨‍🍳',
      title: t('home.features.2.title'),
      description: t('home.features.2.description'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-shoyu-brown via-shoyu-light to-shoyu-brown text-white py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('home.hero.subtitle')}
          </p>
          <Link href={`/${lang}/products`} className="btn-primary text-lg inline-block">
            {t('home.hero.cta')}
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-ja">{t('home.intro.title')}</h2>
            <p className="text-lg leading-relaxed text-shoyu-light">
              {t('home.intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 card">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-shoyu-brown">
                  {feature.title}
                </h3>
                <p className="text-shoyu-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-shoyu-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            {lang === 'ja' && '伝統の味を、ご家庭で'}
            {lang === 'en' && 'Traditional Flavor at Home'}
            {lang === 'ko' && '전통의 맛을 가정에서'}
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            {lang === 'ja' && 'オンラインショップで全国へお届けします'}
            {lang === 'en' && 'Delivered nationwide through our online shop'}
            {lang === 'ko' && '온라인 쇼핑몰에서 전국으로 배송합니다'}
          </p>
          <Link href={`/${lang}/products`} className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-shoyu-brown inline-block">
            {t('common.allProducts')}
          </Link>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { lang: 'ja' },
    { lang: 'en' },
    { lang: 'ko' },
  ];
}
