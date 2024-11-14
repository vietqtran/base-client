'use client'

import ArrowDown from '@/components/icons/ArrowDown'
import { UsFlag } from '@/components/icons/flags/US'
import { VnFlag } from '@/components/icons/flags/VN'
import Cookies from 'js-cookie'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/hooks/useRouter'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickOutside } from '@/hooks/useClickOutside'
import { CnFlag } from '@/components/icons/flags/CN'
import { JpFlag } from '@/components/icons/flags/JP'

const langs = [
   {
      key: 'vi',
      flag: <VnFlag />
   },
   {
      key: 'en',
      flag: <UsFlag />
   },
   {
      key: 'cn',
      flag: <CnFlag />
   },
   {
      key: 'ja',
      flag: <JpFlag />
   }
]

export default function SwitchLang() {
   const { refresh } = useRouter()
   const t = useTranslations()
   const currentLang = Cookies.get('i18next')

   const [isOpen, setIsOpen] = useState(false)

   const handleSwitchLang = (lang: string) => {
      Cookies.set('i18next', lang)
      setIsOpen(false)
      refresh()
   }

   const ref = useRef(null)
   useClickOutside(ref, () => setIsOpen(false))

   return (
      <div
         ref={ref}
         onClick={() => setIsOpen(!isOpen)}
         className="flex cursor-pointer items-center gap-1"
      >
         {t('common.lang-key') === 'vi' && <VnFlag />}
         {t('common.lang-key') === 'cn' && <CnFlag />}
         {t('common.lang-key') === 'en' && <UsFlag />}
         {t('common.lang-key') === 'ja' && <JpFlag />}
         <span className="text-sm">{t('common.current-lang')}</span>
         <div className="relative">
            <div
               className={`${isOpen ? 'rotate-180' : ''} relative duration-100 ease-linear`}
            >
               <ArrowDown />
            </div>
            <AnimatePresence>
               {isOpen && (
                  <motion.div
                     initial={{ opacity: 0, y: 20, x: '-50%' }}
                     animate={{ opacity: 1, y: 0, x: '-50%' }}
                     exit={{ opacity: 0, y: 20, x: '-50%' }}
                     onClick={e => e.stopPropagation()}
                     className="absolute bottom-7 left-1/2 w-60 -translate-x-1/2 border bg-[#fafafa] shadow"
                  >
                     {langs.map((l, i) => {
                        return (
                           <div
                              key={l.key}
                              onClick={() => handleSwitchLang(l.key)}
                              className={`flex items-center justify-start px-3 py-1.5 hover:bg-slate-100 ${i < langs.length - 1 && 'border-b'}`}
                           >
                              {l.flag}
                              <div className="ml-2 flex-1 text-sm">
                                 {t(`common.trans.switch.${l.key}`)}
                              </div>
                              {currentLang === l.key && (
                                 <div>
                                    <svg
                                       className="size-4"
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="32"
                                       height="32"
                                       viewBox="0 0 24 24"
                                    >
                                       <path
                                          fill="#0073bb"
                                          d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                                       />
                                    </svg>
                                 </div>
                              )}
                           </div>
                        )
                     })}
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>
   )
}
