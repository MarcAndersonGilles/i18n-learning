'use client'
import { useIntl } from 'react-intl';

function Componenti18nTest() {
    const intl = useIntl();
  return (
    <>
    <h2>{intl.formatMessage({ id: 'homepage_subheader' })}</h2>
    </>
  )
}

export default Componenti18nTest