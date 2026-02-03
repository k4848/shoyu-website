import Link from 'next/link';
import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { useTranslation } from '@/hooks/useTranslation';

export async function generateStaticParams() {
  const langs = ['ja', 'en', 'ko'];
  const params = [];

  for (const lang of langs) {
    for (const product of products) {
      params.push({
        lang: lang,
        id: product.id,
      });
    }
  }

  return params;
}

export default function ProductDetailPage({ params }) {
  const { lang, id } = params;
  const { t } = useTranslation(lang);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Get related products (same type, different capacity)
  const relatedProducts = products.filter(
    (p) => p.slug === product.slug && p.id !== product.id
  );

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm">
          <Link href={`/${lang}`} className="text-shoyu-light hover:text-shoyu-brown">
            {t('common.home')}
          </Link>
          {' / '}
          <Link href={`/${lang}/products`} className="text-shoyu-light hover:text-shoyu-brown">
            {t('common.products')}
          </Link>
          {' / '}
          <span className="text-shoyu-brown">{product.name[lang]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-br from-shoyu-light to-shoyu-brown rounded-lg flex items-center justify-center">
            <div className="text-white text-center p-12">
              <div className="text-9xl mb-6">🍶</div>
              <div className="text-2xl font-bold">{product.capacity}</div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-serif font-bold mb-4 text-shoyu-brown">
              {product.name[lang]}
            </h1>
            <div className="text-3xl font-bold text-shoyu-gold mb-6">
              {product.price[lang]}
            </div>
            <p className="text-lg text-shoyu-light leading-relaxed mb-8">
              {product.description[lang]}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-shoyu-brown w-24">
                  {t('products.capacity')}:
                </span>
                <span className="text-shoyu-light">{product.capacity}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-shoyu-brown w-24">
                  {t('products.ingredients')}:
                </span>
                <span className="text-shoyu-light">{product.ingredients[lang]}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-shoyu-brown w-24">
                  {t('products.allergens')}:
                </span>
                <span className="text-shoyu-light">{product.allergens[lang]}</span>
              </div>
            </div>

            <button className="btn-primary w-full mb-4">
              {t('products.addToCart')}
            </button>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-shoyu-brown mb-2">{t('products.storage')}</h3>
              <p className="text-sm text-shoyu-light">{t('products.storageInfo')}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 text-shoyu-brown">
              {t('products.relatedProducts')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  lang={lang}
                  linkHref={`/${lang}/products/${relatedProduct.id}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href={`/${lang}/products`} className="btn-outline">
            {t('common.backToProducts')}
          </Link>
        </div>
      </div>
    </div>
  );
}
