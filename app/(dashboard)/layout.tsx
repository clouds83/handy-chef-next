import Container from '@/components/Container'
import BackgroundRectangle from './_components/BackgroundRectangle'
import Footer from './_components/Footer'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'
import { getRecipes } from '@/server/actions/recipes'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const recipeList = await getRecipes()

  return (
    <div className='flex flex-col min-h-dvh'>
      <BackgroundRectangle />
      <Header />

      <div className='px-10 flex-grow'>
        <Container className='mt-24 flex gap-6'>
          <Sidebar recipeList={recipeList} />

          <main className='bg-white shadow-md rounded-lg p-4 flex-grow max-h-[calc(100dvh-9rem)] overflow-y-auto'>
            {children}
          </main>
        </Container>
      </div>

      <Footer />
    </div>
  )
}
