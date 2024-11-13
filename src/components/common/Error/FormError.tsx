import ErrorLarge from '@/components/icons/ErrorLarge'
import { LANG_KEYS } from '@/constants/i18n.constants'
import { CauseError } from '@/types/common.type'
import { useTranslations } from 'next-intl'
import React from 'react'

interface Props {
   cause: CauseError
}

const FormError = ({ cause }: Props) => {
   const t = useTranslations()
   return (
      <div className="flex w-[340px] items-start gap-2 border border-primary-error bg-error p-5">
         <div className="flex-shrink-0 py-0.5">
            <ErrorLarge />
         </div>
         <div className="flex-1 text-sm">
            <div className="capitalize-first mb-1 font-bold">
               {cause[t('common.lang-key') as LANG_KEYS]?.field}
            </div>
            <div className="capitalize-first">
               {cause[t('common.lang-key') as LANG_KEYS]?.message}
            </div>
         </div>
      </div>
   )
}

export default FormError
