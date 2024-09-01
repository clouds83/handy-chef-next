import AuthForm from '@/components/AuthForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <>
      <h2 className='text-center text-2xl'>Login</h2>

      <AuthForm type='login' />

      <p className='text-center text-sm'>
        Already have an account?{' '}
        <Link href='/register' className='text-blue-600'>
          Register.
        </Link>
      </p>
    </>
  )
}
