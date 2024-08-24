import { Ingredient, Recipe } from '@/lib/types'
import { getRecipe } from '@/server/actions/recipes'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function RecipePage({ params }: { params: { id: string } }) {
  const { id } = params
  const recipe = await getRecipe(id)

  if (!recipe) notFound()

  return (
    <>
      <h2 className='text-4xl font-bold my-4'>{recipe.name}</h2>
      {recipe.imageUrl && (
        <Image
          src={recipe.imageUrl}
          alt={recipe.name}
          width={512}
          height={512}
          className='object-cover rounded-lg h-64 w-96'
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
