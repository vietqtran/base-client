'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CommonButton from '@/components/common/Button'
import { twMerge } from 'tailwind-merge'
import GoogleColorIcon from '@/components/icons/GoogleColorIcon'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { useTranslations } from 'next-intl'
import DynamicErrorMessage from '@/components/common/Error/DynamicErrorMessage'
import FormError from '@/components/common/Error/FormError'

const SignInForm = () => {
   const t = useTranslations()
   const SignInSchema = z.object({
      email: z
         .string()
         .min(1, { message: 'required' })
         .email({ message: 'invalid-format' }),
      password: z.string().min(1, { message: 'required' })
   })
   type FormData = z.infer<typeof SignInSchema>

   const { isLoading, signIn, error } = useAuth()
   const [isShowPassword, setIsShowPassword] = React.useState(false)
   const [isRemember, setIsRemember] = React.useState(false)

   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<FormData>({
      resolver: zodResolver(SignInSchema),
      defaultValues: {
         email: '',
         password: ''
      }
   })

   const onSubmit = async (data: FormData) => {
      await signIn({ ...data, isRemember: false })
   }

   return (
      <div className="flex w-full flex-col items-center gap-3">
         {error && <FormError cause={error} />}
         <div className="form-shadow block w-[340px]">
            <div className="heading-auth-bg w-full border-b p-5">
               <h1 className="text-lg font-bold">
                  {t('common.forms.sign-in')}
               </h1>
            </div>
            <div className="w-full bg-white p-5">
               <form
                  className="flex flex-col gap-5"
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <div className="relative flex flex-col">
                     <label className="mb-1.5 w-fit text-sm" htmlFor="email">
                        {t('common.fields.email')}
                     </label>
                     <div className="relative w-full">
                        {errors.email && (
                           <div className="absolute inset-y-0 left-0 h-full w-1 bg-primary-error"></div>
                        )}
                        <input
                           className={twMerge(
                              'h-8 border w-full bg-transparent border-neutral-800 px-2 text-sm outline-none focus:border-[#0073bb] focus:ring-1 focus:ring-[#0073bb]',
                              errors.email &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           id="email"
                           {...register('email')}
                        />
                     </div>
                     {errors.email && (
                        <DynamicErrorMessage
                           errorType={errors.email.message ?? ''}
                           field="email"
                        />
                     )}
                  </div>

                  <div className="relative flex flex-col">
                     <label className="mb-1.5 w-fit text-sm" htmlFor="email">
                        {t('common.fields.password')}
                     </label>
                     <div className="relative w-full">
                        {errors.password && (
                           <div className="absolute inset-y-0 left-0 h-full w-1 bg-primary-error"></div>
                        )}
                        <input
                           className={twMerge(
                              'h-8 border w-full bg-transparent border-neutral-800 px-2 text-sm outline-none focus:border-[#0073bb] focus:ring-1 focus:ring-[#0073bb]',
                              errors.password &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           type={isShowPassword ? 'text' : 'password'}
                           id="password"
                           {...register('password')}
                        />
                     </div>
                     {errors.password && (
                        <DynamicErrorMessage
                           errorType={errors.password.message ?? ''}
                           field="password"
                        />
                     )}

                     <div className="mt-2 flex items-center gap-1.5">
                        <input
                           onChange={e => setIsShowPassword(e.target.checked)}
                           className="size-[14px] bg-white"
                           type="checkbox"
                           id="showPassword"
                           checked={isShowPassword}
                        />
                        <label className="text-sm" htmlFor="showPassword">
                           {t('common.auth.show-password')}
                        </label>
                     </div>
                  </div>

                  <CommonButton
                     loading={isLoading}
                     type="submit"
                     className="w-full"
                     title={t('common.auth.buttons.sign-in')}
                  />
                  <CommonButton
                     variant="outline"
                     color="secondary"
                     className="w-full"
                     iconLeft={<GoogleColorIcon size={16} />}
                  />
               </form>
               <div className="mt-4 text-center">
                  <Link
                     href="/auth/sign-up"
                     className="text-sm text-[#0073bb] underline-offset-4 hover:underline"
                  >
                     {t('common.auth.go-to-sign-up')}
                  </Link>
               </div>
               <div className="mt-5 flex items-center gap-1.5">
                  <input
                     onChange={e => setIsRemember(e.target.checked)}
                     className="size-[14px]"
                     type="checkbox"
                     id="remember"
                     checked={isRemember}
                  />
                  <label className="text-sm" htmlFor="remember">
                     {t('common.auth.remember')}
                  </label>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignInForm
