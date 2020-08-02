// To configure this file, see: https://github.com/garmeeh/next-seo#nextseo-options
// Additional meta: https://github.com/garmeeh/next-seo#additional-meta-tags

import type { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  title: 'Darwin Jahja | Full Stack Software Engineer',
  canonical: 'https://darekaze.dev/',
  description:
    'Darwin Jahja (a.k.a @darekaze) is a Full Stack Software Engineer based in HK & Macao who specializes in creating and developing exceptional, high-quality websites and applications.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://darekaze.dev/',
    site_name: 'Darwin Jahja | Full Stack Software Engineer',
    profile: {
      firstName: 'Darwin',
      lastName: 'Jahja',
      username: 'darekaze',
    },
  },
  twitter: {
    handle: '@_DaRekaze',
    site: '@_DaRekaze',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [{ name: 'author', content: 'Darwin Jahja' }],
}

export default SEO
