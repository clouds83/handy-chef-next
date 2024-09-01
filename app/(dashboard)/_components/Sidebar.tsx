import Input from '@/components/Input'
import Image from 'next/image'
import Link from 'next/link'
import { Recipe } from '@/lib/types'
import RecipeButton from './RecipeButton'

export default function Sidebar({ recipeList }: { recipeList: Recipe[] }) {
  return (
    <aside className='min-w-80 flex flex-col gap-6 sticky top-20 h-[calc(100dvh-9rem)]'>
      <Input type='text' id='search' placeholder='Search recipes' className='shadow-lg' />

      <ul className='bg-white flex  flex-col rounded-lg flex-grow overflow-y-auto shadow-lg'>
        {recipeList.map((recipe: Recipe, index: number) => (
          <li key={index}>
            <RecipeButton recipe={recipe} />
          </li>
        ))}
      </ul>
    </aside>
  )
}
