import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50">
      <div className="bg-red-500 text-black">{t('title')}</div>
    </main>
  );
}
