import Action from '@/components/Action'
import { Ingredient, Recipe } from '@/lib/types'
import { getRecipe } from '@/server/actions/recipeActions'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import DeleteRecipeButton from './_components/DeleteRecipeButton'
import { PencilIcon } from '@heroicons/react/24/solid'

export default async function RecipePage({ params }: { params: { id: string } }) {
  const { id } = params
  const recipe = await getRecipe(id)

  if (!recipe) notFound()

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-bold my-4'>{recipe.name}</h2>

        <div className='flex gap-2'>
          <Action as='a' href={`/recipe/edit/${id}`} Icon={<PencilIcon className='size-6 text-white' />} />
          <DeleteRecipeButton recipeId={id} />
        </div>
      </div>

      {recipe.imageUrl && (
        <Image
          src={recipe.imageUrl}
          alt={recipe.name}
          width={512}
          height={512}
          className='object-cover rounded-lg h-64 w-96 mb-4'
        />
      )}
      <p>
        <span className='font-semibold'>Servings:</span> {recipe.servings}
      </p>
      <p>
        <span className='font-semibold'>Prep Time:</span> {recipe.prepTime} minutes
      </p>
      <p className='font-semibold'>Ingredients:</p>

      {recipe.ingredients && (
        <ul>
          {JSON.parse(recipe.ingredients).map((ingredient: Ingredient, index: number) => (
            <li key={ingredient.name + index}>
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>
          ))}
        </ul>
      )}

      <p className='font-semibold'>Instructions:</p>
      <p>{recipe.instructions}</p>
    </>
  )
}
