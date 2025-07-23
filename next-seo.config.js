// next-seo.config.js
export default {
  titleTemplate: '%s | M&R Roofing Inc.',
  defaultTitle: 'M&R Roofing Inc. – Premium Roofing en Long Island, NY',
  description:
    'M&R Roofing Inc. en Greenlawn, NY ofrece soluciones de techado de alta gama: pizarra, teja, madera de cedro y canaletas de cobre. Servicio en Nassau & Suffolk Counties.',
  canonical: 'https://rm‑roofing.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rm‑roofing.com',
    site_name: 'M&R Roofing Inc.',
    images: [
      {
        url: 'https://rm‑roofing.com/images/og-home.jpg',
        alt: 'Premium Roofing by M&R Roofing',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@MRRoofingNY',
    site: '@MRRoofingNY',
    cardType: 'summary_large_image',
  },
}
