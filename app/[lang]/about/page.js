import { useTranslation } from '@/hooks/useTranslation';

export default function AboutPage({ params }) {
  const { lang } = params;
  const { t } = useTranslation(lang);

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-ja">{t('about.title')}</h1>
          <p className="text-xl text-shoyu-light">{t('about.intro')}</p>
        </div>

        {/* Philosophy Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🏯</div>
              <h2 className="text-3xl font-serif font-bold text-shoyu-brown mb-4">
                {t('about.philosophy.title')}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-shoyu-light">
              {t('about.philosophy.content')}
            </p>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">✨</div>
              <h2 className="text-3xl font-serif font-bold text-shoyu-brown mb-4">
                {t('about.commitment.title')}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-shoyu-light">
              {t('about.commitment.content')}
            </p>
          </div>
        </section>

        {/* Company Information */}
        <section>
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-shoyu-brown mb-8 text-center">
              {t('about.companyInfo.title')}
            </h2>
            <div className="space-y-6">
              <div className="flex border-b border-shoyu-cream pb-4">
                <dt className="w-32 font-bold text-shoyu-brown">{t('about.companyInfo.name')}</dt>
                <dd className="flex-1 text-shoyu-light">{t('about.companyInfo.nameValue')}</dd>
              </div>
              <div className="flex border-b border-shoyu-cream pb-4">
                <dt className="w-32 font-bold text-shoyu-brown">{t('about.companyInfo.established')}</dt>
                <dd className="flex-1 text-shoyu-light">{t('about.companyInfo.establishedValue')}</dd>
              </div>
              <div className="flex border-b border-shoyu-cream pb-4">
                <dt className="w-32 font-bold text-shoyu-brown">{t('about.companyInfo.representative')}</dt>
                <dd className="flex-1 text-shoyu-light">{t('about.companyInfo.representativeValue')}</dd>
              </div>
              <div className="flex border-b border-shoyu-cream pb-4">
                <dt className="w-32 font-bold text-shoyu-brown">{t('about.companyInfo.address')}</dt>
                <dd className="flex-1 text-shoyu-light">{t('about.companyInfo.addressValue')}</dd>
              </div>
              <div className="flex">
                <dt className="w-32 font-bold text-shoyu-brown">{t('about.companyInfo.business')}</dt>
                <dd className="flex-1 text-shoyu-light">{t('about.companyInfo.businessValue')}</dd>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
