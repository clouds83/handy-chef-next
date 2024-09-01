'use client'

import Action from '@/components/Action'
import { deleteRecipe } from '@/server/actions/recipeActions'
import { TrashIcon } from '@heroicons/react/24/solid'

export default function DeleteRecipeButton({ recipeId }: { recipeId: string }) {
  return (
    <Action
      as='button'
      variant='destructive'
      onClick={() => deleteRecipe(recipeId)}
      Icon={<TrashIcon className='size-6 text-white' />}></Action>
  )
}
