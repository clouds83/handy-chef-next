import Action from '@/components/Action'
import Input from '@/components/Input'
import { Recipe } from '@/lib/types'
import { createRecipe } from '@/server/actions/recipes'
import { FormEvent } from 'react'

export default function AddRecipePage() {
  const handleSubmit = async (formData: FormData) => {
    'use server'

    const newRecipe = {
      name: formData.get('name') as string,
      servings: Number(formData.get('servings')),
      prepTime: Number(formData.get('prepTime')),
      instructions: formData.get('instructions') as string,
      imageUrl: formData.get('imageUrl') as string,
    }

    const recipeCreated = await createRecipe(newRecipe as Recipe)

    console.log(recipeCreated)
  }

  return (
    <section>
      <h2 className='text-2xl font-semibold'>Add Recipe</h2>

      <section>
        <h2 className='text-2xl font-semibold'>Add Recipe</h2>

        <form action={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <Input type='text' id='name' name='name' value='123' required />
          </div>

          <div>
            <label htmlFor='servings'>Servings</label>
            <Input type='number' id='servings' name='servings' value={123} required />
          </div>

          <div>
            <label htmlFor='prepTime'>Prep Time</label>
            <Input type='number' id='prepTime' name='prepTime' value={123} required />
          </div>

          {/* <div>
            <label htmlFor='ingredients'>Ingredients</label>
            <textarea id='ingredients' name='ingredients' required />
          </div> */}

          <div>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              className='w-full border border-gray-300 rounded-md'
              required
            />
          </div>

          <div>
            <label htmlFor='imageUrl'>Image URL</label>
            <Input
              type='url'
              id='imageUrl'
              name='imageUrl'
              value='https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>

          <Action as='button' type='submit'>
            Add Recipe
          </Action>
        </form>
      </section>
    </section>
  )
}
