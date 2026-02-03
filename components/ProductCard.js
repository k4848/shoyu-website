export default function ProductCard({ product, lang, linkHref }) {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square bg-gradient-to-br from-shoyu-light to-shoyu-brown flex items-center justify-center">
        <div className="text-white text-center p-6">
          <div className="text-6xl mb-4">🍶</div>
          <div className="text-sm font-bold">{product.capacity}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{product.name[lang]}</h3>
        <p className="text-shoyu-light mb-4 line-clamp-3">{product.description[lang]}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-shoyu-gold">{product.price[lang]}</span>
          <a
            href={linkHref}
            className="btn-primary text-sm px-4 py-2"
          >
            {lang === 'ja' && '詳細を見る'}
            {lang === 'en' && 'View Details'}
            {lang === 'ko' && '상세 보기'}
          </a>
        </div>
      </div>
    </div>
  );
}
