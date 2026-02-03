import { useTranslation } from '@/hooks/useTranslation';

export default function HistoryPage({ params }) {
  const { lang } = params;
  const { t } = useTranslation(lang);

  const timeline = Array.from({ length: 6 }, (_, i) => ({
    year: t(`history.timeline.${i}.year`),
    title: t(`history.timeline.${i}.title`),
    description: t(`history.timeline.${i}.description`),
  }));

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-ja">{t('history.title')}</h1>
          <p className="text-xl text-shoyu-light mb-4">{t('history.subtitle')}</p>
          <p className="text-lg text-shoyu-light max-w-3xl mx-auto">{t('history.intro')}</p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-shoyu-gold transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-shoyu-gold rounded-full transform -translate-x-1/2 md:translate-x-0" />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-shoyu-gold font-bold text-2xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-shoyu-brown mb-3">
                        {item.title}
                      </h3>
                      <p className="text-shoyu-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-4">🌸</div>
            <h2 className="text-2xl font-serif font-bold text-shoyu-brown mb-4">
              {lang === 'ja' && '次の100年へ'}
              {lang === 'en' && 'To the Next 100 Years'}
              {lang === 'ko' && '다음 100년으로'}
            </h2>
            <p className="text-lg text-shoyu-light">
              {lang === 'ja' && '私たちは伝統を守りながらも、常に進化し続けています。これからも皆様に愛される醤油を作り続けてまいります。'}
              {lang === 'en' && 'While preserving tradition, we continue to evolve. We will continue to create soy sauce loved by everyone.'}
              {lang === 'ko' && '전통을 지키면서도 항상 진화하고 있습니다. 앞으로도 모든 분들께 사랑받는 간장을 만들어 나가겠습니다.'}
            </p>
          </div>
        </div>
      </div>
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
