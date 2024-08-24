import Action from '@/components/Action'
import Input from '@/components/Input'

export default function RegisterPage() {
  return (
    <>
      <h2 className='text-center text-2xl'>Register</h2>

      <form className='grid gap-4'>
        <div className='grid'>
          <label htmlFor='email'>Email</label>
          <Input type='email' id='email' name='email' className='border' />
        </div>

        <div className='grid'>
          <label htmlFor='password'>Password</label>
          <Input type='password' id='password' name='password' className='border' />
        </div>

        <div className='grid'>
          <label htmlFor='password'>Confirm Password</label>
          <Input type='password' id='confirmPassword' name='confirmPassword' className='border' />
        </div>

        <Action as='button' type='submit'>
          Register user
        </Action>
      </form>

      <p className='text-center text-sm'>
        Already have an account?{' '}
        <a href='/login' className='text-blue-600'>
          Login.
        </a>
      </p>
    </>
  )
}
