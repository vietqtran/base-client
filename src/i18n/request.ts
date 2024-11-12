import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
   const locale = cookies().get('i18next')?.value ?? 'en'
   return {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default
   }
})
