import ServerIntlProvider from '@/components/ServerIntlProvider';
import React from 'react'
import getIntl from '@/app/intl';
import Componenti18nTest from '@/components/Componenti18nTest';
import LanguageChanger from '@/components/LanguageChanger';

async function page({ params: { locale } }: { params: { locale: string } }) {
    const intl = await getIntl(locale, 'home');
    return (
        <ServerIntlProvider messages={intl.messages} locale={intl.locale} >
            <div className='text-white bg-red-500'>{intl?.formatMessage({ id: 'home_page_header' })}</div>
            <Componenti18nTest />
            <LanguageChanger />
        </ServerIntlProvider>
    )
}

export default page