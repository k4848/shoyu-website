import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { useTranslation } from '@/hooks/useTranslation';

export default function ProductsPage({ params }) {
  const { lang } = params;
  const { t } = useTranslation(lang);

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-ja">{t('products.title')}</h1>
          <p className="text-xl text-shoyu-light">{t('products.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              linkHref={`/${lang}/products/${product.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
