'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
// import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'
import Input from '@/components/Input'
import Action from '@/components/Action'

export default function LoginPage() {
  // const { data: session } = useSession()
  const router = useRouter()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // await signIn('credentials', {
    //   email,
    //   password,
    //   redirect: false,
    // })
  }

  // if (session) {
  //   router.push('/dashboard')
  // }
  // console.log(session)

  // useEffect(() => {
  //   if (session) {
  //     router.push('/dashboard');
  //   }
  // }, []);

  return (
    <>
      <h2 className='text-center text-2xl'>Login</h2>

      <form onSubmit={handleSubmit} className='grid gap-4'>
        <div className='grid'>
          <label htmlFor='email'>Email</label>
          <Input type='email' id='email' name='email' className='border' value='test@email.com' required />
        </div>

        <div className='grid'>
          <label htmlFor='password'>Password</label>
          <Input type='password' id='password' name='password' className='border' value='123123' required />
        </div>

        <Action as='button' type='submit'>
          Login
        </Action>
      </form>

      <p className='text-center text-sm'>
        Already have an account?{' '}
        <a href='/register' className='text-blue-600'>
          Register.
        </a>
      </p>
    </>
  )
}
