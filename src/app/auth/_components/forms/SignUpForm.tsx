'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CommonButton from '@/components/common/Button'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { useTranslations } from 'next-intl'
import DynamicErrorMessage from '@/components/common/Error/DynamicErrorMessage'
import FormError from '@/components/common/Error/FormError'

const SignUpForm = () => {
   const t = useTranslations()
   const SignInSchema = z
      .object({
         email: z
            .string()
            .min(1, { message: 'required' })
            .email({ message: 'invalid-format' }),
         username: z
            .string()
            .min(1, { message: 'required' })
            .min(3, { message: 'min-length' })
            .max(50, { message: 'max-length' }),
         password: z
            .string()
            .min(1, { message: 'required' })
            .min(8, { message: 'min-length' }),
         confirmPassword: z.string().min(1, { message: 'required' })
      })
      .refine(data => data.password === data.confirmPassword, {
         message: 'not-match',
         path: ['confirmPassword']
      })

   type FormData = z.infer<typeof SignInSchema>

   const { signUp, isLoading, error } = useAuth()
   const [isShowPassword, setIsShowPassword] = React.useState(false)

   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<FormData>({
      resolver: zodResolver(SignInSchema),
      defaultValues: {
         email: '',
         username: '',
         password: ''
      }
   })

   const onSubmit = async (data: FormData) => {
      await signUp(data)
   }

   return (
      <div className="flex w-full flex-col items-center gap-3">
         {error && <FormError cause={error} />}
         <div className="form-shadow block w-[340px] dark:border">
            <div className="w-full border-b bg-heading p-5">
               <h1 className="text-lg font-bold">
                  {t('common.forms.sign-up')}
               </h1>
            </div>
            <div className="w-full bg-white p-5 pb-10 dark:bg-secondary-black">
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
                              'h-8 border border-input w-full px-2 text-sm outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-border-primary-blue',
                              errors.email &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           type="email"
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
                     <label className="mb-1.5 w-fit text-sm" htmlFor="username">
                        {t('common.fields.username')}
                     </label>
                     <div className="relative w-full">
                        {errors.username && (
                           <div className="absolute inset-y-0 left-0 h-full w-1 bg-primary-error"></div>
                        )}
                        <input
                           className={twMerge(
                              'h-8 border border-input w-full px-2 text-sm outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-border-primary-blue',
                              errors.username &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           id="username"
                           {...register('username')}
                        />
                     </div>
                     {errors.username && (
                        <DynamicErrorMessage
                           errorType={errors.username.message ?? ''}
                           field="username"
                           minLength={3}
                           maxLength={50}
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
                              'h-8 border border-input w-full px-2 text-sm outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-border-primary-blue',
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
                           minLength={8}
                        />
                     )}
                  </div>

                  <div className="relative flex flex-col">
                     <label className="mb-1.5 w-fit text-sm" htmlFor="email">
                        {t('common.fields.confirm-password')}
                     </label>
                     <div className="relative w-full">
                        {errors.confirmPassword && (
                           <div className="absolute inset-y-0 left-0 h-full w-1 bg-primary-error"></div>
                        )}
                        <input
                           className={twMerge(
                              'h-8 border border-input w-full px-2 text-sm outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-border-primary-blue',
                              errors.confirmPassword &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           type={'password'}
                           id="confirmPassword"
                           {...register('confirmPassword')}
                        />
                     </div>
                     {errors.confirmPassword && (
                        <DynamicErrorMessage
                           errorType={errors.confirmPassword.message ?? ''}
                           field="confirm-password"
                        />
                     )}
                  </div>
                  <div className="flex items-center gap-1.5">
                     <input
                        onChange={e => setIsShowPassword(e.target.checked)}
                        className="size-[14px]"
                        type="checkbox"
                        id="showPassword"
                        checked={isShowPassword}
                     />
                     <label className="text-sm" htmlFor="showPassword">
                        {t('common.auth.show-password')}
                     </label>
                  </div>

                  <CommonButton
                     loading={isLoading}
                     type="submit"
                     className="w-full"
                     title={t('common.auth.buttons.sign-up')}
                  />
               </form>
               <div className="mt-4 text-center">
                  <Link
                     href="/auth/sign-in"
                     className="text-sm text-primary-blue underline-offset-4 hover:underline"
                  >
                     {t('common.auth.go-to-sign-in')}
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignUpForm
