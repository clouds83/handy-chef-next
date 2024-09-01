import RecipeForm from '@/components/RecipeForm'
import { getRecipe } from '@/server/actions/recipeActions'

export default async function EditRecipePage({ params }: { params: { id: string } }) {
  const { id } = params
  const recipeData = await getRecipe(id)

  return (
    <section>
      <h2 className='text-3xl font-semibold mt-4'>Edit Recipe</h2>

      <RecipeForm actionType='edit' recipeData={recipeData as any} />
    </section>
  )
}
