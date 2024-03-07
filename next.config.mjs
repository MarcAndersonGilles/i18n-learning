import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin(
    './i18n/i18n.ts'
);
const nextConfig = {
    // i18n: {
    //     // These are all the locales you want to support in
    //     // your application
    //     locales: ['default', 'fr', 'en', ],
    //     defaultLocale: 'default',
    //     // This is the default locale you want to be used when visiting
    //     // a non-locale prefixed path e.g. `/hello`
    //     localeDetection: false,
    //   },
    //   trailingSlash: true,
};

export default withNextIntl(nextConfig);
