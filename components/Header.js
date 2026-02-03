import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Header({ lang }) {
  const { t } = useTranslation(lang);

  const navItems = [
    { key: 'home', href: `/${lang}` },
    { key: 'products', href: `/${lang}/products` },
    { key: 'about', href: `/${lang}/about` },
    { key: 'history', href: `/${lang}/history` },
    { key: 'stores', href: `/${lang}/stores` },
    { key: 'contact', href: `/${lang}/contact` },
  ];

  const languages = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
  ];

  return (
    <header className="bg-shoyu-brown text-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href={`/${lang}`} className="text-2xl font-serif font-bold hover:text-shoyu-gold transition-colors">
            伝統醤油
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="hover:text-shoyu-gold transition-colors"
              >
                {t(`common.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-2">
              {languages.map((l) => (
                <Link
                  key={l.code}
                  href={`/${l.code}`}
                  className={`px-3 py-1 rounded ${
                    lang === l.code
                      ? 'bg-shoyu-gold text-shoyu-brown'
                      : 'hover:bg-shoyu-light'
                  } transition-colors`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4 flex flex-wrap gap-3">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm hover:text-shoyu-gold transition-colors"
            >
              {t(`common.${item.key}`)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
