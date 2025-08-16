import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

const LOCALES = ['es', 'en'];

export default getRequestConfig(async () => {
  const headersList = await headers();
  const headerLocale = headersList.get('accept-language')?.slice(0, 2);

  let locale = headerLocale ?? 'es';
  if (!LOCALES.includes(locale)) locale = 'es';

  return {
    locale,
    messages: (await import(`../../../messages/${locale}.json`)).default
  };
});
