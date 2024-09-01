import RecipeForm from '@/components/RecipeForm'

export default function AddRecipePage() {
  // const handleSubmit = async (formData: FormData) => {
  //   'use server'

  //   const newRecipe = {
  //     name: formData.get('name') as string,
  //     servings: Number(formData.get('servings')),
  //     prepTime: Number(formData.get('prepTime')),
  //     instructions: formData.get('instructions') as string,
  //     imageUrl: formData.get('imageUrl') as string,
  //   }

  //   const recipeCreated = await createRecipe(newRecipe as Recipe)

  //   if (recipeCreated) {
  //     redirect(`/recipe/${recipeCreated.id}`)
  //   } else {
  //     alert('Error creating recipe')
  //   }
  // }

  return (
    <section>
      <h2 className='text-3xl font-semibold mt-4'>Add Recipe</h2>

      <RecipeForm actionType='add' />
    </section>
  )
}
