import ErrorMessageIcon from '@/components/icons/ErrorMessageIcon'
import { useTranslations } from 'next-intl'

const DynamicErrorMessage = ({
   errorType,
   field,
   minLength,
   maxLength
}: {
   errorType: string
   field: string
   minLength?: number
   maxLength?: number
}) => {
   const t = useTranslations()

   const getErrorMessage = () => {
      switch (errorType) {
         case 'required':
            return t('common.validations.required', {
               field: t(`common.fields.${field}`)
            })
         case 'invalid-format':
            return t('common.validations.invalid-format', {
               field: t(`common.fields.${field}`)
            })
         case 'min-length':
            return t('common.validations.min-length', {
               field: t(`common.fields.${field}`),
               length: minLength
            })
         case 'max-length':
            return t('common.validations.max-length', {
               field: t(`common.fields.${field}`),
               length: maxLength
            })
         case 'not-match':
            return t('common.validations.not-match', {
               field: t(`common.fields.${field}`)
            })
         default:
            return ''
      }
   }

   return (
      <div className="mt-1 flex items-center gap-1">
         <ErrorMessageIcon />
         <span className="text-xs text-primary-error">{getErrorMessage()}</span>
      </div>
   )
}

export default DynamicErrorMessage
