import { object, string, number, array } from 'yup'

export const recipeFormSchema = object().shape({
  id: string().nullable().optional(),
  name: string().required('Name is required'),
  servings: number().max(999999).nullable().optional(),
  prepTime: number().max(999999).nullable().optional(),
  instructions: string().max(1024).nullable().optional(),
  imageUrl: string().nullable().optional(),

  ingredients: array().of(
    object().shape({
      name: string().required('Name is required'),
      amount: number().max(999999).nullable().optional(),
      unit: string().nullable().optional(),
    })
  ),
})
