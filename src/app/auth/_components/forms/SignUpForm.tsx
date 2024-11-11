'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CommonButton from '@/components/common/Button'
import ErrorMessageIcon from '@/components/icons/ErrorMessageIcon'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import ErrorLarge from '@/components/icons/ErrorLarge'

const SignInSchema = z
   .object({
      email: z
         .string()
         .min(1, { message: 'Email is required' })
         .email({ message: 'Invalid email' }),
      username: z
         .string()
         .min(1, { message: 'Username is required' })
         .min(3, { message: 'Username must be at least 3 characters' })
         .max(50, { message: 'Username is over 50 characters' }),
      password: z.string().min(1, { message: 'Password is required' }),
      confirmPassword: z
         .string()
         .min(1, { message: 'Confirm password is required' })
   })
   .refine(data => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword']
   })

type FormData = z.infer<typeof SignInSchema>

const SignUpForm = () => {
   const {signUp, isLoading, error} = useAuth()
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
         {error && (
            <div className="flex w-[340px] items-start gap-2 border border-primary-error bg-error p-5">
               <div className="flex-shrink-0 py-0.5">
                  <ErrorLarge />
               </div>
               <div className="flex-1 text-sm">
                  <div className="mb-1 font-bold">{error?.field}</div>
                  <div>{error?.message}</div>
               </div>
            </div>
         )}
         <div className="form-shadow block w-[340px]">
            <div className="heading-auth-bg w-full border-b p-5">
               <h1 className="text-lg font-bold">User Sign Up</h1>
            </div>
            <div className="w-full bg-white p-5 pb-10">
               <form
                  className="flex flex-col gap-5"
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <div className="relative flex flex-col">
                     <label className="mb-1.5 w-fit text-sm" htmlFor="email">
                        Email
                     </label>
                     <div className="relative w-full">
                        {errors.email && (
                           <div className="absolute inset-y-0 left-0 h-full w-1 bg-primary-error"></div>
                        )}
                        <input
                           className={twMerge(
                              'h-8 border w-full border-neutral-800 px-2 text-sm outline-none focus:border-[#0073bb] focus:ring-1 focus:ring-[#0073bb]',
                              errors.email &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           type="email"
                           id="email"
                           {...register('email')}
                        />
                     </div>
                     {errors.email && (
                        <div className="mt-1 flex items-center gap-1">
                           <ErrorMessageIcon />
                           <span className="text-xs text-primary-error">
                              {errors.email?.message}
                           </span>
                        </div>
                     )}
                  </div>

                  <div className="relative flex flex-col">
                     <label className="mb-1.5 w-fit text-sm" htmlFor="username">
                        Username
                     </label>
                     <div className="relative w-full">
                        {errors.username && (
                           <div className="absolute inset-y-0 left-0 h-full w-1 bg-primary-error"></div>
                        )}
                        <input
                           className={twMerge(
                              'h-8 border w-full border-neutral-800 px-2 text-sm outline-none focus:border-[#0073bb] focus:ring-1 focus:ring-[#0073bb]',
                              errors.username &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           id="username"
                           {...register('username')}
                        />
                     </div>
                     {errors.username && (
                        <div className="mt-1 flex items-center gap-1">
                           <ErrorMessageIcon />
                           <span className="text-xs text-primary-error">
                              {errors.username?.message}
                           </span>
                        </div>
                     )}
                  </div>

                  <div className="relative flex flex-col">
                     <label className="mb-1.5 w-fit text-sm" htmlFor="email">
                        Password
                     </label>
                     <div className="relative w-full">
                        {errors.password && (
                           <div className="absolute inset-y-0 left-0 h-full w-1 bg-primary-error"></div>
                        )}
                        <input
                           className={twMerge(
                              'h-8 border w-full border-neutral-800 px-2 text-sm outline-none focus:border-[#0073bb] focus:ring-1 focus:ring-[#0073bb]',
                              errors.password &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           type={isShowPassword ? 'text' : 'password'}
                           id="password"
                           {...register('password')}
                        />
                     </div>
                     {errors.password && (
                        <div className="mt-1 flex items-center gap-1">
                           <ErrorMessageIcon />
                           <span className="text-xs text-primary-error">
                              {errors.password?.message}
                           </span>
                        </div>
                     )}
                  </div>

                  <div className="relative flex flex-col">
                     <label className="mb-1.5 w-fit text-sm" htmlFor="email">
                        Confirm password
                     </label>
                     <div className="relative w-full">
                        {errors.confirmPassword && (
                           <div className="absolute inset-y-0 left-0 h-full w-1 bg-primary-error"></div>
                        )}
                        <input
                           className={twMerge(
                              'h-8 border w-full border-neutral-800 px-2 text-sm outline-none focus:border-[#0073bb] focus:ring-1 focus:ring-[#0073bb]',
                              errors.confirmPassword &&
                                 'border-primary-error focus:border-primary-error focus:ring-primary-error'
                           )}
                           type={'password'}
                           id="confirmPassword"
                           {...register('confirmPassword')}
                        />
                     </div>
                     {errors.confirmPassword && (
                        <div className="mt-1 flex items-center gap-1">
                           <ErrorMessageIcon />
                           <span className="text-xs text-primary-error">
                              {errors.confirmPassword?.message}
                           </span>
                        </div>
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
                        Show password
                     </label>
                  </div>

                  <CommonButton
                     loading={isLoading}
                     type="submit"
                     className="w-full"
                     title="Sign up"
                  />
               </form>
               <div className="mt-4 text-center">
                  <Link
                     href="/auth/sign-in"
                     className="text-sm text-[#0073bb] underline-offset-4 hover:underline"
                  >
                     Sign in to an existing account
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignUpForm
