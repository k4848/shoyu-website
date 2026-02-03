# Traditional Shoyu Website

130年の歴史を持つ老舗醤油屋の公式ウェブサイト

## 特徴

- **Next.js App Router** - 最新のNext.js機能を使用
- **静的エクスポート対応** - `output: "export"` で完全な静的サイト生成
- **多言語対応** - 日本語、英語、韓国語の3言語対応
- **Tailwind CSS** - 和モダンなデザイン
- **レスポンシブデザイン** - モバイル・タブレット・デスクトップ対応
- **SEO最適化** - メタデータとセマンティックHTML

## ページ構成

1. **ホーム** (`/[lang]`) - ヒーローセクション、特徴紹介
2. **商品一覧** (`/[lang]/products`) - 全商品のグリッド表示
3. **商品詳細** (`/[lang]/products/[id]`) - 個別商品の詳細情報
4. **会社紹介** (`/[lang]/about`) - 会社概要、理念
5. **歴史** (`/[lang]/history`) - 創業から現在までのタイムライン
6. **店舗案内** (`/[lang]/stores`) - 直営店舗情報
7. **お問い合わせ** (`/[lang]/contact`) - お問い合わせフォーム

## 技術スタック

- **Next.js 14** - React フレームワーク
- **Tailwind CSS** - ユーティリティファーストCSS
- **静的サイト生成** - output: export

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド（静的エクスポート）
npm run build
```

## ビルド後のファイル

ビルド後、`out/` ディレクトリに静的ファイルが生成されます。このディレクトリをそのままVercel、Netlify、GitHub Pagesなどにデプロイできます。

## ディレクトリ構造

```
shoyu-website/
├── app/
│   ├── [lang]/           # 言語別ルート
│   │   ├── about/        # 会社紹介
│   │   ├── contact/      # お問い合わせ
│   │   ├── history/      # 歴史
│   │   ├── products/     # 商品一覧・詳細
│   │   ├── stores/       # 店舗案内
│   │   ├── layout.js     # 言語別レイアウト
│   │   └── page.js       # ホームページ
│   ├── globals.css       # グローバルスタイル
│   ├── layout.js         # ルートレイアウト
│   └── page.js           # リダイレクト
├── components/
│   ├── Footer.js
│   ├── Header.js
│   └── ProductCard.js
├── contexts/
│   └── LanguageContext.js
├── data/
│   └── products.json     # 商品データ
├── hooks/
│   └── useTranslation.js
├── locales/
│   └── translations.json # 翻訳データ
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── package.json
```

## 商品データ

商品データは `data/products.json` で管理されています。新しい商品を追加する場合は、このファイルを編集してください。

## Stripe決済対応準備

商品詳細ページには「カートに追加」ボタンが実装されており、将来的にStripe決済を統合できる構造になっています。

## デプロイ

### Vercel（推奨）

```bash
# Vercel CLIでデプロイ
vercel
```

### その他のホスティング

ビルド後の `out/` ディレクトリをアップロードしてください。

## カスタマイズ

### 色のカスタマイズ

`tailwind.config.js` の `colors` セクションで色を変更できます：

```javascript
colors: {
  'shoyu-brown': '#3E2723',
  'shoyu-light': '#795548',
  'shoyu-cream': '#F5E6D3',
  'shoyu-gold': '#D4AF37',
}
```

### 翻訳の追加・編集

`locales/translations.json` で翻訳を編集できます。

## ライセンス

MIT
