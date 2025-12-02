// next-i18next.config.ts
import type { UserConfig } from 'next-i18next';

const nextI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en','hi', 'mr'],
    localeDetection: true,
  },
};

export default nextI18NextConfig;
