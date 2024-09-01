import Action from '@/components/Action'
import Container from '@/components/Container'
import { logout } from '@/server/actions/authActions'
import { PlusCircleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='px-10 fixed left-0 right-0 z-50'>
      <Container className='flex items-center justify-between text-white border-b border-lime-100/30 h-16'>
        <Link href='/'>
          <h1 className='text-xl font-bold text-lime-50'>Handy Chef</h1>
        </Link>

        <nav>
          <ul className='flex space-x-4 items-center'>
            <li>Shopping List</li>
            <li>
              <Action
                iconRight
                size='xs'
                as='a'
                href='/recipe/add'
                Icon={<PlusCircleIcon className='size-5 text-white' />}>
                Add Recipe
              </Action>
            </li>
            <li>
              <form action={logout}>
                <Action
                  as='button'
                  iconRight
                  variant='link'
                  size='xs'
                  Icon={<ArrowLeftStartOnRectangleIcon className='size-5 text-white rotate-180' />}>
                  Logout
                </Action>
              </form>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
