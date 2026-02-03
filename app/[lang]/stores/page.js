import { useTranslation } from '@/hooks/useTranslation';

export default function StoresPage({ params }) {
  const { lang } = params;
  const { t } = useTranslation(lang);

  const stores = Array.from({ length: 3 }, (_, i) => ({
    name: t(`stores.storeList.${i}.name`),
    address: t(`stores.storeList.${i}.address`),
    hours: t(`stores.storeList.${i}.hours`),
    phone: t(`stores.storeList.${i}.phone`),
    description: t(`stores.storeList.${i}.description`),
  }));

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-ja">{t('stores.title')}</h1>
          <p className="text-xl text-shoyu-light">{t('stores.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <div key={index} className="card">
              {/* Store Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-shoyu-light to-shoyu-brown flex items-center justify-center">
                <div className="text-white text-6xl">🏪</div>
              </div>

              {/* Store Info */}
              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold text-shoyu-brown mb-4">
                  {store.name}
                </h2>

                <div className="space-y-3 text-shoyu-light">
                  <div>
                    <div className="font-bold text-shoyu-brown mb-1">
                      {t('stores.accessTitle')}
                    </div>
                    <p className="text-sm">{store.address}</p>
                  </div>

                  <div>
                    <div className="font-bold text-shoyu-brown mb-1">
                      {t('stores.hoursTitle')}
                    </div>
                    <p className="text-sm">{store.hours}</p>
                  </div>

                  <div>
                    <div className="font-bold text-shoyu-brown mb-1">
                      {t('stores.phoneTitle')}
                    </div>
                    <p className="text-sm">{store.phone}</p>
                  </div>

                  <div className="pt-3 border-t border-shoyu-cream">
                    <p className="text-sm italic">{store.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-shoyu-brown mb-6 text-center">
              {t('stores.accessTitle')}
            </h2>
            <div className="aspect-video bg-gradient-to-br from-shoyu-cream to-white rounded-lg flex items-center justify-center">
              <div className="text-center text-shoyu-light">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg">
                  {lang === 'ja' && '地図表示エリア'}
                  {lang === 'en' && 'Map Display Area'}
                  {lang === 'ko' && '지도 표시 영역'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
