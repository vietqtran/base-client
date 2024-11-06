'use client'

import axiosInstance from '@/utils/axios';

export default function SignUp() {

  const handleSignUp = async () => {
    try {
      const { data } = await axiosInstance.post('/auth/sign-up', {
         username: 'johnssdssoes21',
         email: 'johndosssssses21@gmail.com',
         password: '123456',
         roles: ['3']
      })
      console.log(data);
  } catch (error) {
    console.log(error);
  }
  }
  return <button onClick={handleSignUp}>Sign Up</button>
}