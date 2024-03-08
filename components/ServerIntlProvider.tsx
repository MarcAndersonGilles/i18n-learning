'use client';

import { IntlProvider, MessageFormatElement } from 'react-intl';

export default function ServerIntlProvider({ messages, locale, children }: {
    messages: Record<string, string> | Record<string, MessageFormatElement[]> | undefined, // Update the type of messages to Record<string, string>,
    locale: string,
    children: React.ReactNode,
}) {
    return (
        <IntlProvider messages={messages} locale={locale}>
            {children}
        </IntlProvider>
    );
}