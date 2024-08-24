import Action from '@/components/Action'
import Container from '@/components/Container'

export default function Header() {
  return (
    <header className='px-10 fixed left-0 right-0 z-50'>
      <Container className='flex items-center justify-between text-white border-b border-lime-100/30 h-16'>
        <h1 className='text-xl font-bold text-lime-50'>Handy Chef</h1>

        <nav>
          <ul className='flex space-x-4 items-center'>
            <li>Shopping List</li>
            <li>Settings</li>
            <li>
              <Action size='xs' as='a' href='/recipe/add'>
                Add Recipe
              </Action>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
