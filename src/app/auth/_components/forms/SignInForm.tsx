'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CommonButton from '@/components/common/Button'
import ErrorMessageIcon from '@/components/icons/ErrorMessageIcon'
import { twMerge } from 'tailwind-merge'
import GoogleColorIcon from '@/components/icons/GoogleColorIcon'
import Link from 'next/link'

const SignInSchema = z.object({
   email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email' }),
   password: z.string().min(1, { message: 'Password is required' })
})

type FormData = z.infer<typeof SignInSchema>

const SignInForm = () => {
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
      console.log(data)
   }

   return (
      <div className="flex w-full justify-center">
         <div className="form-shadow block w-[340px]">
            <div className="heading-auth-bg w-full border-b p-5">
               <h1 className="text-lg font-bold">User Sign In</h1>
            </div>
            <div className="w-full bg-white p-5">
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

                     <div className="mt-2 flex items-center gap-1.5">
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
                  </div>

                  <CommonButton
                     type="submit"
                     className="w-full"
                     title="Sign in"
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
                     Create a new account
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
                     Remember this account
                  </label>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignInForm
