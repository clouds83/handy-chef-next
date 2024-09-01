import AuthForm from '@/components/AuthForm'

export default function RegisterPage() {
  return (
    <>
      <h2 className='text-center text-2xl'>Register</h2>

      <AuthForm type='register' />

      <p className='text-center text-sm'>
        Already have an account?{' '}
        <a href='/login' className='text-blue-600'>
          Login.
        </a>
      </p>
    </>
  )
}
