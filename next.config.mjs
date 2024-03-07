import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin(
    './i18n/i18n.ts'
);
const nextConfig = {

};

export default withNextIntl(nextConfig);
