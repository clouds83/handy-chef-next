export type Recipe = {
  id?: string | null
  name: string
  userId: string
  imageUrl?: string
  servings?: number
  prepTime?: number
  ingredients?: Ingredient[]
  instructions?: string
}

export type Ingredient = {
  name: string
  amount?: number
  unit?: string
}
