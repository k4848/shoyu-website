import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer({ lang }) {
  const { t } = useTranslation(lang);

  return (
    <footer className="bg-shoyu-brown text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">伝統醤油</h3>
            <p className="text-sm text-gray-300">
              {lang === 'ja' && '1896年創業。伝統の味を次世代へ。'}
              {lang === 'en' && 'Established 1896. Traditional flavor for future generations.'}
              {lang === 'ko' && '1896년 창업. 전통의 맛을 다음 세대로.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('common.products')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}/products`} className="hover:text-shoyu-gold transition-colors">
                  {t('common.products')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="hover:text-shoyu-gold transition-colors">
                  {t('common.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/history`} className="hover:text-shoyu-gold transition-colors">
                  {t('common.history')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('contact.info.title')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>〒123-4567</li>
              <li>{t('contact.info.address')}</li>
              <li>TEL: 03-1234-5678</li>
              <li>info@shoyu-traditional.jp</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-shoyu-light mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Traditional Shoyu Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
