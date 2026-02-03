import { useTranslation } from '@/hooks/useTranslation';

export default function ContactPage({ params }) {
  const { lang } = params;
  const { t } = useTranslation(lang);

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-ja">{t('contact.title')}</h1>
          <p className="text-xl text-shoyu-light">{t('contact.description')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-shoyu-brown font-bold mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-3 border border-shoyu-cream rounded focus:outline-none focus:border-shoyu-brown"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-shoyu-brown font-bold mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 border border-shoyu-cream rounded focus:outline-none focus:border-shoyu-brown"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-shoyu-brown font-bold mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  className="w-full px-4 py-3 border border-shoyu-cream rounded focus:outline-none focus:border-shoyu-brown"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-shoyu-brown font-bold mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 border border-shoyu-cream rounded focus:outline-none focus:border-shoyu-brown resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-serif font-bold text-shoyu-brown mb-6">
                {t('contact.info.title')}
              </h2>
              <div className="space-y-4 text-shoyu-light">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📍</div>
                  <div>
                    <div className="font-bold text-shoyu-brown mb-1">
                      {t('about.companyInfo.address')}
                    </div>
                    <p>{t('contact.info.address')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📞</div>
                  <div>
                    <div className="font-bold text-shoyu-brown mb-1">
                      {t('stores.phoneTitle')}
                    </div>
                    <p>{t('contact.info.phone')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <div className="font-bold text-shoyu-brown mb-1">Email</div>
                    <p>{t('contact.info.email')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <div className="font-bold text-shoyu-brown mb-1">
                      {t('stores.hoursTitle')}
                    </div>
                    <p>{t('contact.info.hours')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-shoyu-cream to-white rounded-lg flex items-center justify-center">
                <div className="text-center text-shoyu-light">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-sm">
                    {lang === 'ja' && 'アクセスマップ'}
                    {lang === 'en' && 'Access Map'}
                    {lang === 'ko' && '오시는 길'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
